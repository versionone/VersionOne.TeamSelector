import React from 'react';

class CloseButton extends React.Component {
    constructor() {
        super();
    }
    render() {
        const {
            closeTeamCard,
            closeTeamName
        } = this.props
        return (
            <button className="close-btn" onClick={closeTeamCard.bind(this, closeTeamName)}>x</button>
        );
    }
}

export default CloseButton;
        