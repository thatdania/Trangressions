import React, { Component } from 'react';


export class Api extends Component {
  constructor() {
    super();
    this.state = {
      players: [],
    };
  }

componentDidMount(){
  fetch("http://localhost:4000/api/players/players.json")
  .then(results => {
    return results.json();
  }).then(data => {
    let players = data.map((player) => {
      return(
        <div>
          <h2>{player.name}</h2>
          <h4>{player.hp}</h4>
          <h4>{player.action}</h4>
        </div>
      )
    })
    this.setState({players: players});
  })
}

  render(){
    return (
      <div>{this.state.players}</div>
    )
  }


}

export default Api;
