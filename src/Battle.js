import './App.css';
import React, { Component } from 'react';

// import { Api } from './Api'
// import Player from './Player/Player'

class Battle extends Component {
  constructor(props){
    super(props);
    this.state = {
      hp1: this.props.player1.hp,
      hp2: this.props.player2.hp
    };
    this.action1 = this.action1.bind(this);
    this.action2 = this.action2.bind(this);
  }
  action1() {
     this.setState({hp2: this.state.hp2 - 10});
  }

  action2() {
     this.setState({hp1: this.state.hp1 - 10});
  }

  render() {
    return (
      <span>
        <div id='player1'>
          <p>{this.props.player1.name}</p>
          <p>Hit Points: {this.state.hp1}</p>
          <img src={"http://localhost:4000" + this.props.player1.image.url} height="100px" width="100px" />
          <button onClick={this.action1}>{this.props.player1.actions[0].name}</button>
          <button onClick={this.action1}>{this.props.player1.actions[1].name}</button>
        </div>
        <br />
        <br />
        <div id='player2'>
          <p>{this.props.player2.name}</p>
          <p>Hit Points: {this.state.hp2}</p>
          <img src={"http://localhost:4000" + this.props.player2.image.url} height="100px" width="100px"/>
          <button onClick={this.action2}>{this.props.player2.actions[0].name}</button>
          <button onClick={this.action2}>{this.props.player2.actions[1].name}</button>
        </div>


      </span>
    );
}
}
export default Battle;
