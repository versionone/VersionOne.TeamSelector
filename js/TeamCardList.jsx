import React from 'react';
import _ from 'underscore';
import TeamCard from './TeamCard.jsx';

const colorArray = ["purple", "orange", "green", "blue"];

class TeamCardList extends React.Component {
    constructor(props) {
        super(props);
    }
    findColor(colorArray, prevColor) {
        var newColorArray = colorArray;
        if (prevColor != null) {
            newColorArray = _.without(newColorArray, prevColor);
        }
        var color = newColorArray[Math.floor(Math.random() * newColorArray.length)];
        return color;
    }
    render() {
        const {
            teamData,
            editTeamName,
            closeTeamCard
        } = this.props;
        var teamDataRender = [];
        var cardColor, prevColor;
        for (var i = 0; i < teamData.length; i++) {
            cardColor = this.findColor(colorArray, prevColor);
            prevColor = cardColor;
            teamDataRender.push(
                <TeamCard
                    key={i}
                    teamName={teamData[i].teamName}
                    editTeamName={editTeamName}
                    closeTeamCard={closeTeamCard}
                    cardColor={cardColor}>
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