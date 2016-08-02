import React from 'react';

class TeamCard extends React.Component {
    constructor(props) {
        super();
    }
    render() {
        return (
            <div className="teamCard">
                <form>
                    <input type="text" value={this.props.teamName} onChange={this.props.editTeamName.bind(this, this.props.teamName)} />
                </form>
            </div>
        );
    }
    /**/
};

export default TeamCard;