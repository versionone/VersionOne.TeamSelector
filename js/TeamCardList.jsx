import React from 'react';
import _ from 'underscore';
import TeamCard from './TeamCard.jsx';
import { SortableContainer } from 'react-sortable-hoc';

const SortableList = SortableContainer((props) => <TeamCardList {...props}/>);

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
        } = this.props;
        var teamDataRender = [];
        for (var i = 0; i < teamData.length; i++) {
            teamDataRender.push(
                <TeamCard
                    key={i}
                    teamName={teamData[i].teamName}
                    editTeamCard={editTeamCard}
                    toggleTeamCardLock={toggleTeamCardLock}
                    closeTeamCard={closeTeamCard}
                    cardColor={teamData[i].cardColor}
                    isLocked={teamData[i].locked}
                    index={i}
                >
                </TeamCard>
            );
        }
        return (
                <div className="teamCardList"
                >
                    {teamDataRender}
                </div>
        );
    }
}

export default SortableList;
