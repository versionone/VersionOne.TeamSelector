import React from 'react';
import NotepadIcon from "../../icons/svgComponents/notepad-svg";

class Notes extends React.Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        };
        this.toggleOpen = this.toggleOpen.bind(this);
        this.onTextAreaChange = this.onTextAreaChange.bind(this);
    }

    toggleOpen() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    onTextAreaChange(event) {
        const notes = event.target.value;
        this.props.updateTeamCardNotes(this.props.teamName, notes)
    }

    render() {
        const{
            updateTeamCardNotes,
            notes
        } = this.props;
        const textareaStyles = this.state.isOpen ? {} : {display: "none"};
        return (
            <span>
                <span onClick={this.toggleOpen}>
                    <NotepadIcon />
                </span>
                <textarea className="noteText" style={textareaStyles} onBlur={this.onTextAreaChange} defaultValue={notes} />
            </span>
        );
    }
}

export default Notes;