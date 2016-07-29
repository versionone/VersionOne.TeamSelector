/** @jsx React.DOM */

'use strict'

var React = require('react')
var TeamCard = require('./TeamCard.jsx')

var TeamCardList = React.createClass({

    propTypes: {
        teamData: React.PropTypes.array.isRequired
    },

    render: function() {
        const {
            teamData
        } = this.props;
        return (
            <div className="teamCardList">
                {teamData.map(function(data) {
                    return <TeamCard key={data.teamName}>{data.teamName}</TeamCard>;
                })}
            </div>
        );
    }

});

module.exports = TeamCardList;