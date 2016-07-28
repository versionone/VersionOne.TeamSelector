/** @jsx React.DOM */

'use strict'

var React = require('react')
var TeamCard = require('./TeamCard.jsx')

var AddTeamCardButton = React.createClass({
    render: function() {
        return (
            <div className="addButton">
                Add Team Card
            </div>
        );
    }
});

module.exports = AddTeamCardButton;