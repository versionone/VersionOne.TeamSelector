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
            teamData
        } = this.props;
        var teamDataRender = [];
        for (var i = 0; i < teamData.length; i++) {
            teamDataRender.push(
                <TeamCard key={teamData[i].teamName}>
                    {teamData[i].teamName}
                </TeamCard>);
        }
        return (
            <div className="teamCardList">
                {teamDataRender}
            </div>
        );
    }
}

module.exports = TeamCardList;