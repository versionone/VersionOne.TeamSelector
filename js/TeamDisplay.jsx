import React from 'react';
import ReactDOM from 'react-dom';
import _ from 'underscore';
import TeamCardList from './TeamCardList.jsx';
import ShuffleButton from './ShuffleButton.jsx';
import AddButton from './AddButton.jsx';
import JokeOfTheDay from "./JokeOfTheDay/JokeOfTheDay";
import { arrayMove } from 'react-sortable-hoc';
import LinkLand from "./LinkLand/LinkLand";
import { Fade as Theme } from './themes';

const theme = new Theme();

const DEFAULT_TEAM_DATA = [
    {"teamName":"Teams show here", "locked":false},
    {"teamName":"Add different teams", "locked":false},
    {"teamName":"Then shuffle them", "locked":false},
    {"teamName":"Before daily stand-up", "locked":false}
];

class TeamDisplay extends React.Component {
    constructor() {
        super();
        let teamData = localStorage.getItem("teamData");

        if (teamData)
            teamData = JSON.parse(teamData);
        else
            teamData = DEFAULT_TEAM_DATA;

        this.state = { teamData };
        this.addTeamCard = this.addTeamCard.bind(this);
        this.editTeamCard = this.editTeamCard.bind(this);
        this.closeTeamCard = this.closeTeamCard.bind(this);
        this.shuffleTeamCards = this.shuffleTeamCards.bind(this);
        this.toggleTeamCardLock = this.toggleTeamCardLock.bind(this);
        this.updateTeamCardNotes = this.updateTeamCardNotes.bind(this);
        this.swapTeams = this.swapTeams.bind(this);
        this.saveTeams = this.saveTeams.bind(this);
    }
    addTeamCard() {
        const { teamData } = this.state;
        var newName = "New Team " + (teamData.length + 1);
        teamData.push({"teamName":newName, "locked":false});

        this.saveTeams(teamData);
    }
    editTeamCard(oldTeamName, newTeamName) {
        const { teamData } = this.state;
        const team = _.findWhere(teamData, { teamName: oldTeamName });

        team.teamName = newTeamName;

        this.saveTeams(teamData);
    }
    toggleTeamCardLock(teamName) {
        const { teamData } = this.state;
        const team = _.findWhere(teamData, { teamName: teamName });

        team.locked = !team.locked;

        this.saveTeams(teamData);
    }
    updateTeamCardNotes(teamName, notes) {
        const { teamData } = this.state;
        const team = _.findWhere(teamData, { teamName: teamName });

        team.notes = notes;

        this.saveTeams(teamData);
    }
    closeTeamCard(closeTeamName) {
        const {
            teamData
        } = this.state;

        const newTeamData = _.without(teamData,
            _.findWhere(teamData,
                {teamName: closeTeamName}
            )
        );

        this.saveTeams(newTeamData);
    }

    saveTeams(teams, callback) {
        localStorage.setItem("teamData", JSON.stringify(teams));
        this.setState({ teamData: teams }, callback);
    }

    shuffleTeamCards() {
        function shuffleTeams(teams) {
            var swapRange = teams.length, swap, randomPosition;
            while (swapRange) {
                randomPosition = Math.floor(Math.random() * swapRange--);
                swap = teams[swapRange];
                teams[swapRange] = teams[randomPosition];
                teams[randomPosition] = swap;
            }
        }

        const {
            teamData,
        } = this.state;

        const teamsToShuffle = teamData.filter(team => !team.locked);

        shuffleTeams(teamsToShuffle);

        const shuffledTeamData = teamData.reduce((newList, team) => {
            newList.push(team.locked ? team : teamsToShuffle.pop())
            return newList;
        }, []);

        this.saveTeams(shuffledTeamData, () => theme.seed());
    }

    swapTeams ({oldIndex, newIndex}) {
        var newPosition = arrayMove(this.state.teamData, oldIndex, newIndex);
        this.saveTeams(newPosition);
    };

    render() {
        const {
            teamData
        } = this.state;
        return (
            <div className="teamDisplay">
                <div className="button-wrapper">
                    <ShuffleButton shuffleTeamCards={this.shuffleTeamCards} />
                    <AddButton addTeamCard={this.addTeamCard} />
                </div>
                <TeamCardList
                    teamData={teamData}
                    editTeamCard={this.editTeamCard}
                    closeTeamCard={this.closeTeamCard}
                    toggleTeamCardLock={this.toggleTeamCardLock}
                    updateTeamCardNotes={this.updateTeamCardNotes}
                    useDragHandle={true}
                    lockAxis={'y'}
                    onSortEnd={this.swapTeams}
                    theme={theme}
                />
                <JokeOfTheDay />
                <LinkLand/>
            </div>
        );
    }
}

ReactDOM.render(
    <TeamDisplay />,
    document.getElementById("content")
);