import React, { Component } from 'react';
import './App.css';
import Player from './Player/Player'

class App extends Component {
 state = {
      FirstPlayer: [],
      SecondPlayer: []
    }

  togglePlayerHandler = (player) => {
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

      return (
        <ul>
          {listOfPlayers}
          {this.state.FirstPlayer.name}
           Vs 
          {this.state.SecondPlayer.name}
        </ul>
      );
    }
  }
}

export default App;
