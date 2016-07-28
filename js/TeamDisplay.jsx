/** @jsx React.DOM */

'use strict'

var React = require('react')
var TeamCardList = require('./TeamCardList.jsx')
var AddTeamCardButton = require('./AddTeamCardButton.jsx')

var TeamDisplay = React.createClass({
    render: function() {
        return (
            <div className="teamDisplay">
                <AddTeamCardButton />
                <TeamCardList />
            </div>
        );
    }
});

module.exports = TeamDisplay