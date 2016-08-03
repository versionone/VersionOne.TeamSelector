import React from 'react';
import TeamCard from './TeamCard.jsx';

class AddTeamCardButton extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <button className="add-btn" onClick={this.props.addButtonClick}>
                Add Team Card
            </button>
        );
    }
}

export default AddTeamCardButton;