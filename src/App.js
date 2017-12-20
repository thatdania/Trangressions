import React, { Component } from 'react';
import './App.css';
import Player from './Player/Player'

class App extends Component {
 state = {
      FirstPlayer: { id: "id1",
                     name: "Select Player",
                       hp: "0",
                 strength: "0",
                    image: {url: "/uploads/player/goggles.jpg"}
                  },
      SecondPlayer: { id: "id2",
                      name: "Select Player",
                        hp: "0",
                  strength: "0",
                     image: {url: "/uploads/player/goggles.jpg"}
                    }
    }

  togglePlayerHandler = (player) => {
    if (this.state.FirstPlayer.name === "Select Player" ){
      this.setState({FirstPlayer: player})}
    else if (this.state.SecondPlayer.name === "Select Player" ){
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

      const listOfPlayers = this.state.playerData.map(player => {
        return <Player
          name = {player.name}
         image = {"http://localhost:4000" + player.image.url}
         click = {() => this.togglePlayerHandler(player)}
           key = {player.id}
           />;
      });

      const PlayersChosen = [this.state.FirstPlayer, this.state.SecondPlayer]

      const SelectedPlayers = PlayersChosen.map(player => {
        return <Player
          name = {player.name}
         image = {"http://localhost:4000" + player.image.url}
            hp =  {"Health: " + player.hp}
      strength = {"Strength: " + player.strength}
           key = {player.id}
          />;
      });




      return (
        <ul>
          {listOfPlayers} <br></br>
          {this.state.FirstPlayer.name + " Vs " + this.state.SecondPlayer.name}  <br></br>
          {SelectedPlayers}
        </ul>
      );
    }
  }
}

export default App;
