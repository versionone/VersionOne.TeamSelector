import React from 'react';
import NotepadIcon from "../../icons/svgComponents/notepad-svg";
import _ from 'underscore';

class Notes extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            notes: props.notes
        };
        this.toggleOpen = this.toggleOpen.bind(this);
        this.onTextAreaChange = this.onTextAreaChange.bind(this);
        this.saveTeamNotes = this.saveTeamNotes.bind(this);
        this.saveTeamNotes = _.debounce(this.saveTeamNotes, 500)
    }

    toggleOpen() {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }

    saveTeamNotes() {
        const notes = this.state.notes;
        this.props.updateTeamCardNotes(this.props.teamName, notes)
    }

    componentDidUpdate(oldProps) {
        if (oldProps.notes !== this.props.notes) {
            this.setState({
                notes: this.props.notes,
            })
        }
    }

    onTextAreaChange(event) {
        this.saveTeamNotes();
        this.setState({
            notes: event.target.value,
        })
    }

    render() {
        const textareaStyles = this.state.isOpen ? {} : {display: "none"};
        const noteClass = this.props.notes ? "hasNotes" : "noNotes";
        return (
            <span>
                <span onClick={this.toggleOpen}>
                    <NotepadIcon className={noteClass} />
                </span>
                <textarea className="noteText" style={textareaStyles} onChange={this.onTextAreaChange} value={this.state.notes} />
            </span>
        );
    }
}

export default Notes;