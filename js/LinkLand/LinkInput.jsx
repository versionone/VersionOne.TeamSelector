import React from 'react';

class LinkInput extends React.PureComponent {
    render() {
        const {
            saveLink,
            retrieveLink,
            clearLinks
        } = this.props;
        return (
            <div className="link-input">
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