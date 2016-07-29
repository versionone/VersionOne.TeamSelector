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
        const renderMe = [];
        for (var i = 0; i < teamData.length; i++) {
                var obj = teamData[i];
                renderMe.push(<TeamCard>{obj.teamName}</TeamCard>);
            }
        return <div>{renderMe}</div>
    }
});

module.exports = TeamCardList;