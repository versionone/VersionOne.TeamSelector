/** @jsx React.DOM */

'use strict'

var React = require('react')
var TeamCard = require('./TeamCard.jsx')

var TeamCardList = React.createClass({
    render: function() {
        return (
            <div className='teamList'>
                <TeamCard>imua</TeamCard>
                <TeamCard>heisenburger</TeamCard>
            </div>
        );
    }
});

module.exports = TeamCardList;