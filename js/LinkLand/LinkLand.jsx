import React from 'react';
import _ from 'underscore';

class LinkLand extends React.Component {
    constructor(props) {
        super(props);
        this.saveLink = this.saveLink.bind(this)
        this.state = {
            links: [],
        }
    }

    saveLink() {
        const input = document.getElementById("linkLandInput");
        const link = input.value;
        this.setState({
            links: [...this.state.links, link]
        });
        input.value = '';
    render() {
        const {

        } = this.props;
        return (
            <div className="link-land">
                <input id="linkLandInput"/>
                <div className="link-land-buttons">
                    <button onClick={this.saveLink}> Save </button>
                    <button> Get </button>
                    <button> Clear </button>
                </div>
            </div>
        );
    }
}

export default LinkLand;