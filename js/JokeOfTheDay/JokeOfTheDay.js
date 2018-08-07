import React from 'react';


class JokeOfTheDay extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            joke: '',
        };

        this.getJoke = this.getJoke.bind(this);
        this.setJoke = this.setJoke.bind(this);
    }
    getJoke(){
        const xmlHttp = new XMLHttpRequest();
        const callBack = this.setJoke;
        xmlHttp.onreadystatechange = function() {
            if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
                callBack(xmlHttp.responseText);
        };
        xmlHttp.open("GET", "https://icanhazdadjoke.com/", true);
        xmlHttp.setRequestHeader("Accept", "text/plain");
        xmlHttp.send(null);
    }

    setJoke(joke){
        this.setState({
            joke,
        })
    }

    componentDidMount(){
        this.getJoke();
        setTimeout(this.getJoke, 1000*60*60*20)
    }

    render() {
        return (
            <div className="jokeOfTheDay">
                {this.state.joke}
            </div>
        );
    }
}

export default JokeOfTheDay;