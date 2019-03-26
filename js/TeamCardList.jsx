import React from 'react';
import _ from 'underscore';
import TeamCard from './TeamCard.jsx';
import { SortableContainer } from 'react-sortable-hoc';

const SortableList = SortableContainer((props) => <TeamCardList {...props} useDragHandle/>);

class TeamCardList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {
            teamData,
            editTeamCard,
            closeTeamCard,
            toggleTeamCardLock,
            updateTeamCardNotes,
            theme,
        } = this.props;
        var teamDataRender = [];
        for (var i = 0; i < teamData.length; i++) {
            teamDataRender.push(
                <TeamCard
                    key={i}
                    teamName={teamData[i].teamName}
                    editTeamCard={editTeamCard}
                    toggleTeamCardLock={toggleTeamCardLock}
                    updateTeamCardNotes={updateTeamCardNotes}
                    closeTeamCard={closeTeamCard}
                    cardColor={theme.getCardColor(teamData[i], i, teamData.length)}
                    isLocked={teamData[i].locked}
                    notes={teamData[i].notes}
                    index={i}
                >
                </TeamCard>
            );
        }
        return (
                <ol className="team-card-list">
                    {teamDataRender}
                </ol>
        );
    }
}

export default SortableList;
