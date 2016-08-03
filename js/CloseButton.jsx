import React from 'react';

class CloseButton extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <button className="close-btn" onClick={this.props.closeTeamCard}>x</button>
        );
    }
}

export default CloseButton;
        