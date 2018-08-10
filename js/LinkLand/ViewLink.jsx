import React from 'react';
import {invokeFunctionAt} from "../invokeFunctionAt";

class ViewLink extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        this.props.toggleHidden();
    }

    componentDidMount() {
        this.props.toggleHidden();
        invokeFunctionAt(this.props.toggleHidden, 0, 10, 15, 0)
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