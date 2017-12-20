import React, { Component } from 'react';
import './App.css';
import Player from './Player/Player'
import Battle from './Battle'
import renderIf from './RenderIf';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      FirstPlayer: [],
      SecondPlayer: [],
      showComponent: false,
      listPlayers: true,
      listSelected: true
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
      listPlayers: false,
      listSelected: false
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
      {console.log(this.listOfPlayers)}

      return (
        <ul>
        {renderIf(this.state.listPlayers, listOfPlayers)}
        {renderIf(this.state.listSelected, SelectedPlayers)}

           {this.state.FirstPlayer.name + " Vs " + this.state.SecondPlayer.name}


          <button onClick={this._onButtonClick}> Fight </button>
            {this.state.showComponent ? <Battle name1={this.state.FirstPlayer.name} hp1={this.state.FirstPlayer.hp} action1={this.state.FirstPlayer.action} name2={this.state.SecondPlayer.name} hp2={this.state.SecondPlayer.hp} action2={this.state.FirstPlayer.action}/> : null}
        </ul>
      );
    }
  }
}

export default App;
