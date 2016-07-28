/** @jsx React.DOM */

'use strict'

var React = require('react')
var ReactDOM = require('react-dom')
var TeamCard = require('./TeamCard.jsx')

ReactDOM.render(<TeamCard teamName='imua'/>, document.getElementById("content"));
