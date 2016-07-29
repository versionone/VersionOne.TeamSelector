var React = require('react')
var TeamCard = require('./TeamCard.jsx')

class AddTeamCardButton extends React.Component {
    constructor() {
        super();
        this.props = {
            teamData: React.PropTypes.array.isRequired
        }
        this.handleClick = this.handleClick.bind(this);
    }
    render() {
        return (
            <div className="addButton">
                Add Team Card
            </div>
        );
    }
    handleClick() {
        var nextRank = teamData.length + 1;
        var newName = "New Team " + nextRank;
        document.write("Button was clicked");
        //teamData.push({"teamName":newName, "rank":nextRank});
    }
}

export default AddTeamCardButton;