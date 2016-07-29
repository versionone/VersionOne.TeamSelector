import React from 'react';
import TeamCard from './TeamCard.jsx';

class AddTeamCardButton extends React.Component {
    constructor() {
        super();
    }
    handleClick() {
        console.log("Click fired");
        /*console.log("AddTeamCardButton was clicked");
        var nextRank = teamData.length + 1;
        var newName = "New Team " + nextRank;
        this.setState({teamData: {"teamName":newName, "rank":nextRank}});*/
    }
    render() {
        return (
            <div className="button-wrapper">
                <button onClick={this.handleClick}>
                    Add Team Card
                </button>
            </div>
        );
    }
}

export default AddTeamCardButton;