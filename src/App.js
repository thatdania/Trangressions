import React, { Component } from 'react';
import './App.css';
import Player from './Player/Player'
import Battle from './Battle'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      FirstPlayer: [],
      SecondPlayer: [],
      showComponent: false
    }
    this._onButtonClick= this._onButtonClick.bind(this);
  }

  togglePlayerHandler = (player) => {
    if (this.state.FirstPlayer instanceof Array){
      this.setState({FirstPlayer: player})}
    else if (this.state.SecondPlayer instanceof Array){
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
    });
  }

  render() {
    if (!this.state.playerData) {
      return <p>Loading Players...</p>

    } else {
        const listOfPlayers = this.state.playerData.map( (player,index) => {
          return <Player name= {player.name}
            click={() => this.togglePlayerHandler(player)}
            key={index}/>;
        });

      const PlayersChosen = [this.state.FirstPlayer, this.state.SecondPlayer];

      const SelectedPlayers = PlayersChosen.map( (player, index) => {
        if(this.state.FirstPlayer instanceof Array) { return <Player name= {"Select Player"}/> } else {
          return <Player name= {player.name}
          hp =  {"Health: " + player.hp}
          strength = {"Strength: " + player.strength}
          key={index}/>;
        }
      });

      return (
        <ul>
          {listOfPlayers}
           {this.state.FirstPlayer.name + " Vs " + this.state.SecondPlayer.name}

          {SelectedPlayers}

          <button onClick={this._onButtonClick}>Fight</button>
            {this.state.showComponent ? <Battle  /> : null}
        </ul>
      );
    }
  }
}

export default App;
