import React from 'react';
import ReactDOM from 'react-dom';
import TeamCardList from './TeamCardList.jsx';
import ShuffleButton from './ShuffleButton.jsx';
import AddTeamCardButton from './AddTeamCardButton.jsx';
import _ from 'underscore';

class TeamDisplay extends React.Component {
    constructor() {
        super();
        this.state = {
            teamData : [
                {"teamName":"imua", "rank": 1},
                {"teamName":"heisenburg", "rank": 2}
            ]
        };
        this.addButtonClick = this.addButtonClick.bind(this);
        this.editTeamName = this.editTeamName.bind(this);
        this.closeTeamCard = this.closeTeamCard.bind(this);
        this.shuffleTeamCards = this.shuffleTeamCards.bind(this);
    }
    addButtonClick() {
        const {
            teamData
        } = this.state;
        var nextRank = teamData.length + 1;
        var newName = "New Team " + nextRank;
        teamData.push({"teamName":newName, "rank":nextRank});
        this.setState({teamData: teamData});
    }
    editTeamName(oldTeamName, newTeamName) {
        const {
            teamData
        } = this.state;
        for (var i = 0; i < teamData.length; i++) { //use underscore to do this bro
            if (teamData[i].teamName === oldTeamName) {
                teamData[i].teamName = newTeamName;
                break;
            }
        }
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
            teamData
        } = this.state;
        var swapRange = teamData.length, swap, randomPosition;
        while (swapRange) {
            randomPosition = Math.floor(Math.random() * swapRange--);
            swap = teamData[swapRange];
            teamData[swapRange] = teamData[randomPosition];
            teamData[randomPosition] = swap;
        }
        this.setState({teamData: teamData});
    }
    render() {
        const {
            teamData
        } = this.state;
        return (
            <div className="teamDisplay">
                <div className="button-wrapper">
                    <ShuffleButton shuffleTeamCards={this.shuffleTeamCards} />
                    <AddTeamCardButton addButtonClick={this.addButtonClick} />
                </div>
                <TeamCardList teamData={teamData} editTeamName={this.editTeamName} closeTeamCard={this.closeTeamCard}/>
            </div>
        );
    }
}

ReactDOM.render(
    <TeamDisplay />,
    document.getElementById("content")
);