import React from 'react';

class LockButton extends React.Component {
    constructor() {
        super();
    }
    render() {
        const {
            lockTeamCard,
            lockTeamName
        } = this.props;
        return (
            <img src="../icons/unlocked-icon.png" className="lock-btn" onClick={lockTeamCard.bind(this, lockTeamName)} />
        );
    }
}

export default LockButton;