import React from 'react';
import CloseButton from './CloseButton.jsx';
import LockButton from "./LockButton";
import { SortableElement, SortableHandle } from 'react-sortable-hoc';
import Notes from "./Notes/Notes";

const DragHandle = SortableHandle(() => <span className='DragHandler' />); // This can be any component you want
const SortableItem = SortableElement((props) => <TeamCard {...props}/>);

class TeamCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teamNameInput: props.teamName,
            cardColor: props.cardColor,
            index: props.index
        };
        this.handleEditTeamCard = this.handleEditTeamCard.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            teamNameInput: nextProps.teamName,
        });
    }
    handleEditTeamCard(event) {
        var oldTeamName = this.state.teamNameInput;
        var newTeamName = event.target.value;
        this.setState({teamNameInput: newTeamName});
        this.props.editTeamCard(oldTeamName, newTeamName);
    }
    setColorHex(cardColor) {
        var hexColor;
        switch (cardColor) {
            case "purple":
                hexColor = "#976E98";
                break;
            case "green":
                hexColor = "#53c68c";
                break;
            case "blue":
                hexColor = "#2980B9";
                break;
            case "red":
                hexColor = "#f08675";
                break;
            case "yellow":
                hexColor= "#F0DC89";
                break;
        }
        return hexColor;
    }
    render() {
        var cardStyle = {
            backgroundColor: this.setColorHex(this.props.cardColor)
        };
        return (
                <div style={cardStyle}
                     className="team-card"
                    >
                    <DragHandle/>
                    <CloseButton closeTeamCard={this.props.closeTeamCard} closeTeamName={this.state.teamNameInput}/>
                    <LockButton lockTeamCard={this.props.toggleTeamCardLock} lockTeamName={this.state.teamNameInput} isLocked={this.props.isLocked} />
                    <Notes notes={this.props.notes} updateTeamCardNotes={this.props.updateTeamCardNotes} teamName={this.state.teamNameInput}/>
                    <form>
                        <input type="text" value={this.state.teamNameInput} onChange={this.handleEditTeamCard} />
                    </form>
                    <span style={cardStyle} className="card-point" />
                </div>
        );
    }
}

export default SortableItem;
