import React from 'react';
import TeamCard from './TeamCard.jsx';

class AddTeamCardButton extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div className="button-wrapper">
                <button onClick={this.props.addButtonClick}>
                    Add Team Card
                </button>
            </div>
        );
    }
}

export default AddTeamCardButton;