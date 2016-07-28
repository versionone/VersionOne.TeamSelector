/** @jsx React.DOM */

'use strict'

var React = require('react')

var TeamCard = React.createClass({

    propTypes: {
        children: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            <div className="teamCard">{this.props.children}</div>
        );
    }
});

module.exports = TeamCard;