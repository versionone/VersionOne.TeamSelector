var React = require('react')
var ReactDOM = require('react-dom')
var TeamCardList = require('./TeamCardList.jsx')
var AddTeamCardButton = require('./AddTeamCardButton.jsx')

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
    }
    render() {
        const {
            teamData
        } = this.state;
        return (
            <div className="teamDisplay">
                <AddTeamCardButton />
                <TeamCardList teamData={teamData} />
            </div>
        );
    }
}

ReactDOM.render(
    <TeamDisplay />,
    document.getElementById("content")
);