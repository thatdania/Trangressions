import React, { Component } from 'react';
import ToggleDisplay from 'react-toggle-display';
import App from './App';
import './GameOver.css'

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
          <img class="gameover" src='images/gameover.jpeg' height="250px" width="400px"/>
          <div className="moveimage">
          <img className="image" src={this.props.image} height="200px" width="200px" />
          </div>
          <img class="you" src='images/you-.png' height="200px" width="200px"/>
          <img class="lose" src='images/lose.png' height="50px" width="100px"/>
          <button className="button" onClick={this.playAgain}>Play Again?</button>
        </ToggleDisplay>
        <ToggleDisplay show={this.state.startNew}>
          <App />
        </ToggleDisplay>
      </div>

    )
  }
}
