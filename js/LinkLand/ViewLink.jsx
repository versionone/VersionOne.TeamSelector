import React from 'react';
import {DateTime, Interval} from "luxon";

class ViewLink extends React.PureComponent {
    constructor(props) {
        super(props);
        this.toggleHidden = this.toggleHidden.bind(this);
        this.state = {
            isHidden: true
        }
    }

    toggleHidden () {
        var start = DateTime.fromObject({hour: 10, minutes: 15});
        var end = DateTime.fromObject({hour: 10, minutes: 20});
        var i = Interval.fromDateTimes(start, end);
        if (i.contains(DateTime.local()) && this.state.isHidden) {
            this.props.retrieveLink();
            this.setState({
                isHidden: !this.state.isHidden
            })
        }
    }

    componentDidUpdate() {
        this.toggleHidden();
    }

    componentDidMount() {
        this.toggleHidden();
    }

    render() {
        const {
            link
        } = this.props;
        const style = this.state.isHidden ?  {display: 'none'} : {};
        return (
            <a href={link} target='_blank' rel='noopener' style={style}>
                {link}
            </a>
        );
    }
}

export default ViewLink;