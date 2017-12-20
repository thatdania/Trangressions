import React, { Component } from 'react';
import './App.css';
import Player from './Player/Player'
import Battle from './Battle'
import renderIf from './RenderIf';

class App extends Component {
constructor(props){
  super(props);
  this.state = {
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
    },
    showComponent: false,
    listPlayers: true,
    listSelected: true
  }
  this._onButtonClick=  this._onButtonClick.bind(this)
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
      .then(data => data.json())
      .then(data=> {
        this.setState({
          playerData: data
        })
      })
  }

  _onButtonClick(){
    this.setState({
      showComponent: true,
      listPlayers: false,
      listSelected: false
    });
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
        {renderIf(this.state.listPlayers, listOfPlayers)} <br></br>
      {renderIf(this.state.listSelected, SelectedPlayers)}<br></br>

           {this.state.FirstPlayer.name + " Vs " + this.state.SecondPlayer.name}


          <button onClick={this._onButtonClick}> Fight </button>
            {this.state.showComponent ? <Battle name1={this.state.FirstPlayer.name} hp1={this.state.FirstPlayer.hp} action1={this.state.FirstPlayer.action} name2={this.state.SecondPlayer.name} hp2={this.state.SecondPlayer.hp} action2={this.state.FirstPlayer.action}/> : null}
        </ul>
      );
    }
  }
}

export default App;
