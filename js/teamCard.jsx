import React from 'react';
import ReactDOM from 'react-dom';
import CloseButton from './CloseButton.jsx';

class TeamCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teamNameInput: props.teamName,
            cardColor: props.cardColor
        }
        this.handleChange = this.handleChange.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            teamNameInput: nextProps.teamName,
        });
    }
    handleChange(event) {
        var oldTeamName = this.state.teamNameInput;
        var newTeamName = event.target.value;
        this.setState({teamNameInput: newTeamName});
        this.props.editTeamName(oldTeamName, newTeamName);
    }
    setColorHex(cardColor) {
        var hexColor;
        switch (cardColor) {
            case "purple":
                hexColor = "#976E98"
                break;
            case "orange":
               hexColor = "#F6754D"
                break;
            case "green":
                hexColor = "#01AE9A"
                break;
            case "blue":
                hexColor = "#2698C4"
                break;
        }
        return hexColor;
    }
    render() {
        var cardStyle = {
            backgroundColor: this.setColorHex(this.props.cardColor)
        }
        return (
            <div style={cardStyle} className="team-card">
                <CloseButton closeTeamCard={this.props.closeTeamCard} closeTeamName={this.state.teamNameInput}/>
                <form>
                    <input type="text" value={this.state.teamNameInput} onChange={this.handleChange}></input>
                </form>
                <span style={cardStyle} className="card-point" />
            </div>
        );
    }
};

export default TeamCard;