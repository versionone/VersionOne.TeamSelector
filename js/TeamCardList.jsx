import React from 'react';
import TeamCard from './TeamCard.jsx';

class TeamCardList extends React.Component {
    constructor(props) {
        super(props);
        props = {
            teamData: React.PropTypes.array.isRequired
        }
    }
    render() {
        const {
            teamData,
            editTeamName,
            closeTeamCard
        } = this.props;
        var teamDataRender = [];
        for (var i = 0; i < teamData.length; i++) {
            teamDataRender.push(
                <TeamCard
                    key={i}
                    teamName={teamData[i].teamName}
                    editTeamName={editTeamName}
                    closeTeamCard={closeTeamCard}>
                </TeamCard>
            );
        }
        return (
            <div className="teamCardList">
                {teamDataRender}
            </div>
        );
    }
}

export default TeamCardList;