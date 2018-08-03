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
var prevColor1 = "yellow";
var prevColor2 = "red";

const DEFAULT_TEAM_DATA = [
    {"teamName":"Teams show here", "rank": 1, "cardColor":"green", "locked":false},
    {"teamName":"Add different teams", "rank": 2, "cardColor":"blue", "locked":false},
    {"teamName":"Then shuffle them", "rank":3, "cardColor":"red", "locked":false},
    {"teamName":"Before daily stand-up", "rank":4, "cardColor":"yellow", "locked":false}
];

const DEFAULT_COLOR_ARRAY = ["purple", "green", "blue", "red", "yellow"];

const setTeamData = (teamData) => localStorage.setItem("teamData", JSON.stringify(teamData));
const setColorArray = (colorArray) => localStorage.setItem("colorArray", JSON.stringify(colorArray));

class TeamDisplay extends React.Component {
    constructor() {
        super();
        let teamData = localStorage.getItem("teamData");
        let colorArray = localStorage.getItem("colorArray");

        if(!teamData) {
            setTeamData(DEFAULT_TEAM_DATA);
            setColorArray(DEFAULT_COLOR_ARRAY);
            teamData = DEFAULT_TEAM_DATA;
            colorArray = DEFAULT_COLOR_ARRAY;
        } else {
            teamData = JSON.parse(teamData);
            colorArray = JSON.parse(colorArray);
        }

        this.state = { teamData, colorArray };
        this.addTeamCard = this.addTeamCard.bind(this);
        this.editTeamCard = this.editTeamCard.bind(this);
        this.closeTeamCard = this.closeTeamCard.bind(this);
        this.shuffleTeamCards = this.shuffleTeamCards.bind(this);
        this.toggleTeamCardLock = this.toggleTeamCardLock.bind(this);
    }
    addTeamCard() {
        const {
            teamData,
            colorArray,
        } = this.state;
        var nextRank = teamData.length + 1;
        var newName = "New Team " + nextRank;
        teamData.push({"teamName":newName, "rank":nextRank, "cardColor":this.getTeamCardColor(), "locked":false});
        setTeamData(teamData);
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
        setTeamData(teamData);
        this.setState({teamData: teamData});
    }
    toggleTeamCardLock(teamName) {
        const {
            teamData
        } = this.state;
        var teamIndex = _.indexOf(teamData,
            _.findWhere(teamData,
                {teamName: teamName}
            )
        );
        teamData[teamIndex].locked = !teamData[teamIndex].locked;
        setTeamData(teamData);
        this.setState({teamData: teamData});
    }
    closeTeamCard(closeTeamName) {
        const {
            teamData
        } = this.state;

        const newTeamData = _.without(teamData,
            _.findWhere(teamData,
                {teamName: closeTeamName}
            )
        );
        setTeamData(newTeamData);
        this.setState({teamData: newTeamData});
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
        setTeamData(newTeamArray);
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
                <TeamCardList teamData={teamData} editTeamCard={this.editTeamCard} closeTeamCard={this.closeTeamCard} toggleTeamCardLock={this.toggleTeamCardLock}/>
            </div>
        );
    }
}

ReactDOM.render(
    <TeamDisplay />,
    document.getElementById("content")
);