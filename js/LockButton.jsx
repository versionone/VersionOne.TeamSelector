import React from 'react';

class LockButton extends React.Component {
    constructor() {
        super();
    }
    render() {
        const {
            lockTeamCard,
            lockTeamName,
            isLocked
        } = this.props;
        const lockIcon = isLocked ? "../icons/locked-icon.png" : "../icons/unlocked-icon.png";
        return (
            <img src={lockIcon} className="lock-btn" onClick={lockTeamCard.bind(this, lockTeamName)} />
        );
    }
}

export default LockButton;