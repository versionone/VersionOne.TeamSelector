import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import TeamCardList from './TeamCardList.jsx';
import ShuffleButton from './ShuffleButton.jsx';
import AddButton from './AddButton.jsx';

/*prevColor1 and prevColor2 need to be in global to change them
effectively. Yes, I know putting things in global scope is bad.
Could not put prevColors in state because setState only queues
a state change and does not immediately change state*/
var prevColor1 = "blue";
var prevColor2 = "green";

class TeamDisplay extends React.Component {
    constructor() {
        super();
        this.state = {
            teamData : [
                {"teamName":"imua", "rank": 1, "cardColor":"green"},
                {"teamName":"heisenburg", "rank": 2, "cardColor":"blue"}
            ],
            colorArray : ["purple", "green", "blue", "red", "yellow"]
        };
        this.addTeamCard = this.addTeamCard.bind(this);
        this.editTeamCard = this.editTeamCard.bind(this);
        this.closeTeamCard = this.closeTeamCard.bind(this);
        this.shuffleTeamCards = this.shuffleTeamCards.bind(this);
    }
    addTeamCard() {
        const {
            teamData,
            colorArray,
        } = this.state;
        var nextRank = teamData.length + 1;
        var newName = "New Team " + nextRank;
        teamData.push({"teamName":newName, "rank":nextRank, "cardColor":this.getTeamCardColor()});
        this.setState({teamData: teamData});
    }
    editTeamCard(oldTeamName, newTeamName) {
        const {
            teamData
        } = this.state;
        var teamIndex = _.indexOf(teamData,
            _.findWhere(teamData,
                {teamName: oldTeamName}
            )
        );
        teamData[teamIndex].teamName = newTeamName;
        this.setState({teamData: teamData});
    }
    closeTeamCard(closeTeamName) {
        const {
            teamData
        } = this.state;
        this.setState({teamData:
            _.without(teamData,
                _.findWhere(teamData,
                    {teamName: closeTeamName}
                )
            )
        });
    }
    shuffleTeamCards() {
        const {
            teamData,
        } = this.state;
        var swapRange = teamData.length, swap, randomPosition;
        while (swapRange) {
            randomPosition = Math.floor(Math.random() * swapRange--);
            swap = teamData[swapRange];
            teamData[swapRange] = teamData[randomPosition];
            teamData[randomPosition] = swap;
        }
        var newTeamData = _.mapObject(teamData, (team) => {
                team.cardColor = this.getTeamCardColor();
                return team;
            })
        var newTeamArray = _.toArray(newTeamData);
        this.setState({teamData: newTeamArray});
    }
    getTeamCardColor() {
        const {
            colorArray,
        } = this.state
        var newColorArray = colorArray;
        if (prevColor1 != null) {
            newColorArray = _.without(newColorArray, prevColor1);
        }
        if (prevColor2 != null) {
            newColorArray = _.without(newColorArray, prevColor2);
        }
        var color = newColorArray[Math.floor(Math.random() * newColorArray.length)];
        prevColor2 = prevColor1;
        prevColor1 = color;
        return color;
    }
    render() {
        const {
            teamData
        } = this.state;
        return (
            <div className="teamDisplay">
                <div className="button-wrapper">
                    <ShuffleButton shuffleTeamCards={this.shuffleTeamCards} />
                    <AddButton addTeamCard={this.addTeamCard} />
                </div>
                <TeamCardList teamData={teamData} editTeamCard={this.editTeamCard} closeTeamCard={this.closeTeamCard}/>
            </div>
        );
    }
}

ReactDOM.render(
    <TeamDisplay />,
    document.getElementById("content")
);