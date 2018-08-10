import React from 'react';
import { DateTime, Interval } from 'luxon';
import LinkInput from "./LinkInput";
import ViewLink from "./ViewLink";

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
            currentLink: '',
            isHidden: true
        }
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
            this.setState({
                links: links,
                currentLink: linkToRetrieve
            });
            setLinks(links);
        }
        if (this.state.isHidden) {
            this.setState({
                isHidden: !this.state.isHidden
            })
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

    toggleHidden () {
        const start = DateTime.fromObject({hour: 10, minutes: 15});
        const end = DateTime.fromObject({hour: 10, minutes: 30});
        const i = Interval.fromDateTimes(start, end);
        if (i.contains(DateTime.local()) && this.state.isHidden) {
            this.retrieveLink();
            this.setState({
                isHidden: !this.state.isHidden
            })
        }
    }

    render() {
        return (
            <div>
                <ViewLink  link={this.state.currentLink} retrieveLink={this.retrieveLink} toggleHidden={this.toggleHidden} isHidden={this.state.isHidden}/>
                <LinkInput saveLink={this.saveLink} retrieveLink={this.retrieveLink} clearLinks={this.clearLinks} toggleHidden={this.toggleHidden}/>
            </div>
        );
    }
}

export default LinkLand;