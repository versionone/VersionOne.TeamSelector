import React from 'react';

class LinkInput extends React.PureComponent {
    render() {
        const {
            isHidden,
            saveLink,
            retrieveLink,
            clearLinks
        } = this.props;
        const style = isHidden ?  {display: 'none'} : {};
        return (
            <div className="link-land" style={style}>
                <input id="linkLandInput" onKeyUp={saveLink}/>
                <div className="link-land-buttons">
                    <button onClick={saveLink}> Save</button>
                    <button onClick={retrieveLink}> Get</button>
                    <button onClick={clearLinks}> Clear</button>
                </div>
            </div>
        );
    }
}

export default LinkInput;