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
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        const {
            teamData
        } = this.state;
        console.log("Click fired");
        var nextRank = teamData.length + 1;
        var newName = "New Team " + nextRank;
        this.setState({teamData: [{"teamName":newName, "rank":nextRank}]});
        console.log("State was changed");
    }
    render() {
        const {
            teamData
        } = this.state;
        return (
            <div className="teamDisplay">
                <AddTeamCardButton handleClick={this.handleClick} />
                <TeamCardList teamData={teamData} />
            </div>
        );
    }
}

ReactDOM.render(
    <TeamDisplay />,
    document.getElementById("content")
);