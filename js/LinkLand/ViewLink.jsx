import React from 'react';
import {invokeFunctionEverydayAt} from "../invokeFunctionAt";

class ViewLink extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        this.props.showLinkIfTime();
    }

    componentDidMount() {
        this.props.showLinkIfTime();
        invokeFunctionEverydayAt(this.props.showNewLink, 10, 15, 0)
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