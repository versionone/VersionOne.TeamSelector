/** @jsx React.DOM */

'use strict'

var React = require('react')
var TeamCard = require('./TeamCard.jsx')

var AddTeamCardButton = React.createClass({
    handleClick() {
        {/*call something to start a chain reaction to change redux state here*/}
    },

    render: function() {
        return (
            <div className="addButton">
                Add Team Card
            </div>
        );
    }
});

module.exports = AddTeamCardButton;