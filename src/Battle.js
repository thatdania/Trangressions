import './App.css';
import React, { Component } from 'react';

// import { Api } from './Api'
// import Player from './Player/Player'

class Battle extends Component {
  constructor(props){
    super(props);
    this.state = {
      hp1: this.props.player1.hp,
      hp2: this.props.player2.hp,
      strength1: this.props.player1.strength,
      strength2: this.props.player2.strength
    };
    this.player1PrimaryAttack = this.player1PrimaryAttack.bind(this);
    this.player2PrimaryAttack = this.player2PrimaryAttack.bind(this);
    this.player1SecondaryAttack = this.player1SecondaryAttack.bind(this);
    this.player2SecondaryAttack = this.player2SecondaryAttack.bind(this);
  }

  randomAttack1 (strength) {
    return Math.floor(((Math.random() * 4) + 6)*(strength/100))
  }

  randomAttack2 (strength) {
    return Math.floor(((Math.random() * 4) + 9)*(strength/100))
  }

  player1PrimaryAttack() {
     this.setState({hp2: this.state.hp2 - this.randomAttack1(this.state.strength1)});
  }
  player1SecondaryAttack() {
     this.setState({hp2: this.state.hp2 - this.randomAttack2(this.state.strength1)});
  }

  player2PrimaryAttack() {
     this.setState({hp1: this.state.hp1 - this.randomAttack1(this.state.strength2)});
  }
  player2SecondaryAttack() {
     this.setState({hp1: this.state.hp1 - this.randomAttack2(this.state.strength2)});
  }

  render() {
    return (
      <span>
        <div id='player1'>
          <p>{this.props.player1.name}</p>
          <p>Hit Points: {this.state.hp1}</p>
          <img src={"http://localhost:4000" + this.props.player1.image.url} height="100px" width="100px" />
          <button onClick={this.player1PrimaryAttack}>{this.props.player1.actions[0].name}</button>
          <button onClick={this.player1SecondaryAttack}>{this.props.player1.actions[1].name}</button>
        </div>
        <br />
        <br />
        <div id='player2'>
          <p>{this.props.player2.name}</p>
          <p>Hit Points: {this.state.hp2}</p>
          <img src={"http://localhost:4000" + this.props.player2.image.url} height="100px" width="100px"/>
          <button onClick={this.player2PrimaryAttack}>{this.props.player2.actions[0].name}</button>
          <button onClick={this.player2SecondaryAttack}>{this.props.player2.actions[1].name}</button>
        </div>
      </span>
    );
}
}
export default Battle;
