import React from 'react';
import _ from 'underscore';
import TeamCard from './TeamCard.jsx';

class TeamCardList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            teamData,
            editTeamCard,
            closeTeamCard,
        } = this.props;
        var teamDataRender = [];
        for (var i = 0; i < teamData.length; i++) {
            teamDataRender.push(
                <TeamCard
                    key={i}
                    teamName={teamData[i].teamName}
                    editTeamCard={editTeamCard}
                    closeTeamCard={closeTeamCard}
                    cardColor={teamData[i].cardColor}>
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