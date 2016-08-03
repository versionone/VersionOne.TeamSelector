import React from 'react';
import ReactDOM from 'react-dom';
import CloseButton from './CloseButton.jsx';

class TeamCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            teamNameInput: props.teamName
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        var oldTeamName = this.state.teamNameInput;
        var newTeamName = event.target.value;
        this.setState({teamNameInput: newTeamName});
        this.props.editTeamName(oldTeamName, newTeamName);
    }
    render() {
        return (
            <div className="teamCard">
                <CloseButton closeTeamCard={this.props.closeTeamCard} />
                <form>
                    <input type="text" value={this.state.teamNameInput} onChange={this.handleChange}></input>
                </form>
            </div>
        );
    }
};

export default TeamCard;