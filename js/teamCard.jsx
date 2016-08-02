import React from 'react';

class TeamCard extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div className="teamCard">
                <input type="text" value={this.props.teamName} onChange={this.props.editTeamName.bind(this, this.props.teamName)} />
            </div>
        );
    }
};

export default TeamCard;