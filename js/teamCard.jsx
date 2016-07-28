/** @jsx React.DOM */

'use strict'

var React = require('react')

var TeamCard = React.createClass({

    propTypes: {
        teamName: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            <div className="teamCard">{this.props.teamName}</div>
        );
    }
});

module.exports = TeamCard;