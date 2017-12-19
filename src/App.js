import React, { Component } from 'react';
import './App.css';
import Player from './Player/Player'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
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
          key={player.id}/>;
      });

      return (
        <ul>
          {listOfPlayers}
        </ul>
      );
    }
  }
}

export default App;
