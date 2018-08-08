import React from 'react';

class ViewLink extends React.PureComponent {
    render() {
        const {
            isHidden,
            link
        } = this.props;
        const style = isHidden ?  {display: 'none'} : {};
        return (
            <a href={link} target='_blank' rel='noopener'>
                {link}
            </a>
        );
    }
}

export default ViewLink;