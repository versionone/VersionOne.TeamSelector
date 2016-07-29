import React from 'react';
import TeamCard from './TeamCard.jsx';

class AddTeamCardButton extends React.Component {
    constructor() {
        super();
    }
    handleClick() {
        console.log("Click fired");
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