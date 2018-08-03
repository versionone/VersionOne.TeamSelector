import React from 'react';
import _ from 'underscore';

class LinkLand extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const {

        } = this.props;
        return (
            <div className="link-land">
                <input />
                <div className="link-land-buttons">
                    <button> Save </button>
                    <button> Get </button>
                    <button> Clear </button>
                </div>
            </div>
        );
    }
}

export default LinkLand;