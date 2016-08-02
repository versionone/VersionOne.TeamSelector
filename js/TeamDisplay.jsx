import React from 'react';
import ReactDOM from 'react-dom';
import TeamCardList from './TeamCardList.jsx';
import AddTeamCardButton from './AddTeamCardButton.jsx';

//maintain state in TeamDisplay -> thats how you update the view
//add a constructor where you can set initial state and then update that initial state
//?class x extends React.Component
//?to set initial state you need a constructor
//?to get a constructor you need to use a class and React.Component
//store state in outer most component (TeamDisplay)
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
    editTeamName(testString, event) {
        console.log(testString);
        /*var newTeamData = this.state.teamData;
        var newTeamName = event.target.value;
        for (var teamName in newTeamData) {
            if (newTeamData[i].teamName === oldTeamName) {
                newTeamData[i].teamName = newTeamName;
            }
            break;
        }
        this.setState({teamData: newTeamData});*/
    }
    render() {
        const {
            teamData
        } = this.state;
        return (
            <div className="teamDisplay">
                <AddTeamCardButton addButtonClick={this.addButtonClick} />
                <TeamCardList teamData={teamData} editTeamName={this.editTeamName} />
            </div>
        );
    }
}

ReactDOM.render(
    <TeamDisplay />,
    document.getElementById("content")
);