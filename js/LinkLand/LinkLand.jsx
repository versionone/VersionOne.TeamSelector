import React from 'react';
import { DateTime, Interval } from 'luxon';
import LinkInput from "./LinkInput";

const setLinks = (links) => localStorage.setItem("links", JSON.stringify(links));

class LinkLand extends React.PureComponent {
    constructor(props) {
        super(props);
        this.saveLink = this.saveLink.bind(this);
        this.retrieveLink = this.retrieveLink.bind(this);
        this.clearLinks = this.clearLinks.bind(this);
        this.toggleHidden = this.toggleHidden.bind(this);

        let links = localStorage.getItem("links");
        links = links ? JSON.parse(links) : [];

        this.state = {
            links: links,
            isHidden: true
        }
    }

    toggleHidden () {
        var start = DateTime.fromObject({hour: 10, minutes: 15});
        var end = DateTime.fromObject({hour: 10, minutes: 20});
        var i = Interval.fromDateTimes(start, end);
        if (i.contains(DateTime.local()) && this.state.isHidden)
            this.setState({
              isHidden: !this.state.isHidden
            })
    }

    saveLink(event) {
        if(event.type === "click" || (event.type === "keyup" && event.keyCode === 13)) {
            const input = document.getElementById("linkLandInput");
            const link = input.value;
            if (link.length) {
                const links = [...this.state.links, link];
                this.setState({
                    links: links
                });
                setLinks(links);
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
            setLinks(links);
        }
    };

    clearLinks() {
        const input = document.getElementById("linkLandInput");
        input.value = '';
        this.setState({
            links: []
        });
        setLinks([]);
    };

    componentDidUpdate() {
        this.toggleHidden();
    }

    componentDidMount() {
        this.toggleHidden();
    }

    render() {
        const {

        } = this.props;
        return (
            <LinkInput isHidden={this.state.isHidden} saveLink={this.saveLink} retrieveLink={this.retrieveLink} clearLinks={this.clearLinks}/>
        );
    }
}

export default LinkLand;