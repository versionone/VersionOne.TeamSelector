import React from 'react';
import {DateTime, Interval} from "luxon";

class ViewLink extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        this.props.toggleHidden();
    }

    componentDidMount() {
        this.props.toggleHidden();
    }

    render() {
        const {
            link,
            isHidden
        } = this.props;
        const style = isHidden ?  {display: 'none'} : {};
        return (
            <a href={link} target='_blank' rel='noopener' style={style}>
                {link}
            </a>
        );
    }
}

export default ViewLink;