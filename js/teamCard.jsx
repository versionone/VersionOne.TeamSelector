import React from 'react';

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
                <form>
                    <input type="text" value={this.state.teamNameInput} onChange={this.handleChange}></input>
                </form>
            </div>
        );
    }
};

export default TeamCard;