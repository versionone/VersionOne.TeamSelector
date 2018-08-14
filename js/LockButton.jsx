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
        //because this all gets put in bundle.js, these paths are not correct in development
        //TODO - find a way for these paths to work in both dev and prod
        const lockIcon = isLocked ? "./icons/locked-icon.png" : "./icons/unlocked-icon.png";
        return (
            <img src={lockIcon} className="lock-btn" onClick={lockTeamCard.bind(this, lockTeamName)} />
        );
    }
}

export default LockButton;