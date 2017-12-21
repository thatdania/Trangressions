import './App.css';
import React, { Component } from 'react';
import { GameOver } from './GameOver'
import ToggleDisplay from 'react-toggle-display';

// import { Api } from './Api'
// import Player from './Player/Player'

class Battle extends Component {
  constructor(props){
    super(props);
    this.state = {
      hp1: this.props.player1.hp,
      hp2: this.props.player2.hp,
      strength1: this.props.player1.strength,
      strength2: this.props.player2.strength,
      showGameOver: false,
      show: true,
      image1: this.props.player1.image.url,
      image2: this.props.player2.image.url,
      loser: null
    };
    this.player1PrimaryAttack = this.player1PrimaryAttack.bind(this);
    this.player2PrimaryAttack = this.player2PrimaryAttack.bind(this);
    this.player1SecondaryAttack = this.player1SecondaryAttack.bind(this);
    this.player2SecondaryAttack = this.player2SecondaryAttack.bind(this);
    this.attack1 = this.attack1.bind(this);
    this.attack2 = this.attack2.bind(this);
    this.player1Lose = this.player1Lose.bind(this);
    this.player2Lose = this.player2Lose.bind(this);
  }

  randomAttack (strength, num) {
    return Math.floor(((Math.random() * 4) + num)*(strength/100))
  }

  stop(hpLevel){
   return hpLevel >= 0;
  }

  attack1(level){
    return this.state.hp2 - this.randomAttack(this.state.strength1, level);
  }

  attack2(level){
    return this.state.hp1 - this.randomAttack(this.state.strength2, level);
  }

  player1Lose(){
    return "http://localhost:4000"+this.state.image1;
  }

  player2Lose(){
    return "http://localhost:4000"+this.state.image2;
  }

  player1PrimaryAttack() {
    this.stop(this.state.hp2) ? this.setState({hp2: this.attack1(6)}) : this.setState({showGameOver: true, show: false})
    this.setState({loser: this.player2Lose()});
  }

  player1SecondaryAttack() {
    this.stop(this.state.hp2) ? this.setState({hp2: this.attack1(9)}) : this.setState({showGameOver: true, show: false})
    this.setState({loser: this.player2Lose()});
  }

  player2PrimaryAttack() {
    this.stop(this.state.hp1) ? this.setState({hp1: this.attack2(6)}) : this.setState({showGameOver: true, show: false})
    this.setState({loser: this.player1Lose()});
  }

  player2SecondaryAttack() {
    this.stop(this.state.hp1) ? this.setState({hp1: this.attack2(9)}) : this.setState({showGameOver: true, show: false})
    this.setState({loser: this.player1Lose()});
  }

  render() {
    return (
      <span>
        <ToggleDisplay show={this.state.show}>
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
        </ToggleDisplay>
        <ToggleDisplay show={this.state.showGameOver}>
          <GameOver image={this.state.loser} />
        </ToggleDisplay>
      </span>

    );
  }
}
export default Battle;
