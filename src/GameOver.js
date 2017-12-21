import React, { Component } from 'react';


export class GameOver extends Component {
  render(){
    return(
      <div>
        <h1>Game Over!</h1>
        <img src={this.props.image} />
      </div>

    )
  }
}
