import React from 'react';
import _ from 'underscore';

class LinkLand extends React.Component {
    constructor(props) {
        super(props);
        this.saveLink = this.saveLink.bind(this);
        this.retrieveLink = this.retrieveLink.bind(this);
        this.clearLinks = this.clearLinks.bind(this);
        this.state = {
            links: [],
        }
    }

    saveLink(event) {
        if(event.type === "click" || (event.type === "keyup" && event.keyCode === 13)) {
            const input = document.getElementById("linkLandInput");
            const link = input.value;
            if (link.length) {
                this.setState({
                    links: [...this.state.links, link]
                });
                input.value = '';
            }
        }
    };

    retrieveLink() {
        const links = [...this.state.links];
        if (links.length) {
            const linkToRetrieve = links.shift();
            const input = document.getElementById("linkLandInput");
            input.value = linkToRetrieve;
            this.setState({
                links: links
            });
        }
    };

    clearLinks() {
        const input = document.getElementById("linkLandInput");
        input.value = '';
        this.setState({
            links: []
        });
    };

    render() {
        const {

        } = this.props;
        return (
            <div className="link-land">
                <input id="linkLandInput" onKeyUp={this.saveLink}/>
                <div className="link-land-buttons">
                    <button onClick={this.saveLink}> Save </button>
                    <button onClick={this.retrieveLink}> Get </button>
                    <button onClick={this.clearLinks}> Clear </button>
                </div>
            </div>
        );
    }
}

export default LinkLand;