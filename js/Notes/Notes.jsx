import React from 'react';
import NotepadIcon from "../../icons/svgComponents/notepad-svg";

class Notes extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
        this.toggleOpen = this.toggleOpen.bind(this);
    }

    toggleOpen() {
        console.log("i'm not " + this.state.isOpen + " anymore");
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    render() {
        const textareaStyles = this.state.isOpen ? {} : {display: "none"};
        return (
            <span>
                <span onClick={this.toggleOpen}>
                    <NotepadIcon />
                </span>
                <textarea style={textareaStyles} />
            </span>
        );
    }
}

export default Notes;