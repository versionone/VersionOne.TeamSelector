import React from 'react';
import _ from 'underscore';
import TeamCard from './TeamCard.jsx';

const colorArray = ["purple", "orange", "green", "blue"];

class TeamCardList extends React.Component {
    constructor(props) {
        super(props);
    }
    findColor(colorArray, prevColor1, prevColor2) {
        if (prevColor1 != null) {
            colorArray = _.without(colorArray, prevColor1);
        }
        if (prevColor2 != null) {
            colorArray = _.without(colorArray, prevColor2);
        }
        var color = colorArray[Math.floor(Math.random() * colorArray.length)];
        return color;
    }
    render() {
        const {
            teamData,
            editTeamName,
            closeTeamCard
        } = this.props;
        var teamDataRender = [];
        var cardColor, prevColor1, prevColor2;
        for (var i = 0; i < teamData.length; i++) {
            cardColor = this.findColor(colorArray, prevColor1, prevColor2);
            prevColor2 = prevColor1;
            prevColor1 = cardColor;
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