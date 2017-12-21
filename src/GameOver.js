import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';
import App from './App';

export class GameOver extends Component {
  constructor(props){
    super(props);
    this.state = {
      startNew: false,
      gameOver: true
    }
    this.playAgain = this.playAgain.bind(this)
  }

  playAgain(){
    this.setState({
      startNew: true,
      gameOver: false
    });
  }

  render(){
    return(
      <div>
        <ToggleDisplay show={this.state.gameOver}>
          <h1>Game Over!</h1>
          <img src={this.props.image} />
          <button onClick={this.playAgain}>Play Again?</button>
        </ToggleDisplay>
        <ToggleDisplay show={this.state.startNew}>
          <App />
        </ToggleDisplay>
      </div>

    )
  }
}
