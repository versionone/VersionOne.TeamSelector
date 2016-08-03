import React from 'react';
import ReactDOM from 'react-dom';
import TeamCardList from './TeamCardList.jsx';
import AddTeamCardButton from './AddTeamCardButton.jsx';

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
    editTeamName(oldTeamName, newTeamName) {
        const {
            teamData
        } = this.state;
        console.log(oldTeamName);
        console.log("editTeamName was called");
        console.log(newTeamName);
        for (var i = 0; i < teamData.length; i++) { //use underscore to do this bro
            if (teamData[i].teamName === oldTeamName) {
                teamData[i].teamName = newTeamName;
            }
        }
        this.setState({teamData: teamData});
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