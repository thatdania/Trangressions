import React, { Component } from 'react';
import './App.css';
import Player from './Player/Player'


class App extends Component {
  constructor(props){
    super(props);
    this.concatStrings = this.concatStrings.bind(this)
    this.state = {
      FirstPlayer: [],
      SecondPlayer: []
    };
  };

  concatStrings(string1, string2) {
    return string1+ " " + string2
  }

  togglePlayerHandler(player) {
    if (this.state.FirstPlayer instanceof Array){
      console.log(player)
      this.setState({FirstPlayer: player})}
    else if (this.state.SecondPlayer instanceof Array){
      console.log(player)
      this.setState({SecondPlayer: player})
    }
  }

  componentDidMount() {
    fetch('http://localhost:4000/api/players/players.json')
      .then(d => d.json())
      .then(d => {
        console.log(d)
        this.setState({
          playerData: d
        })
      })
  }

  render() {
    if (!this.state.playerData) {
      return <p>Loading Players...</p>

    } else {

      const listOfPlayers = this.state.playerData.map( (player) => {
        return <Player name= {player.name}
          click={() => this.togglePlayerHandler(player)}
          key={player.id}/>;
      });

      const PlayersChosen = [this.state.FirstPlayer, this.state.SecondPlayer]

      const SelectedPlayers = PlayersChosen.map( player => {
        if(this.state.FirstPlayer instanceof Array) { return <Player name= {"Select Player"}/> } else {
        return <Player name= {player.name}
        hp =  {"Health: " + player.hp}
        strength = {"Strength: " + player.strength}
        key={player.strength}/>;
      }
      });




      return (
        <ul>
          {listOfPlayers}
           {this.state.FirstPlayer.name + " Vs " + this.state.SecondPlayer.name}

          {SelectedPlayers}
        </ul>
      );
    }
  }
}

export const concatStrings = App.prototype.concatStrings;
export default App;
