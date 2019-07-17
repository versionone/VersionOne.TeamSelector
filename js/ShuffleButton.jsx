import React from 'react';

class ShuffleButton extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <button className="shuffle-btn big-button" onClick={this.props.shuffleTeamCards}>
                Shuffle Team Cards
            </button>
        );
    }
}

export default ShuffleButton;