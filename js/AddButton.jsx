import React from 'react';
import TeamCard from './TeamCard.jsx';

class AddButton extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <button className="add-btn" onClick={this.props.addTeamCard}>
                Add Team Card
            </button>
        );
    }
}

export default AddButton;