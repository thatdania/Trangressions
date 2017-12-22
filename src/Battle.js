import './App.css';
import React, { Component } from 'react';
import {CSSTransitionGroup} from 'react-transition-group';
import './Battle.css'
import { GameOver } from './GameOver'
import ToggleDisplay from 'react-toggle-display';



class Battle extends Component {
  constructor(props){
    super(props);
    this.state = {
      turn: 1,
      hp1: this.props.player1.hp,
      hp2: this.props.player2.hp,
      strength1: this.props.player1.strength,
      strength2: this.props.player2.strength,
      crit1: (200 - this.props.player1.strength)*0.25,
      crit2: (200 - this.props.player2.strength)*0.25,
      items: [],
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

  componentDidMount() {
    fetch('http://localhost:4000/api/action_pictures/action_pictures.json')
      .then(data => data.json())
      .then(data=> {
        this.setState({
          picturesData: data
        })
      })
  }

  randomAttack (strength, num) {
    return Math.floor(((Math.random() * 4) + num)*(strength/100))
  }

  attack1(level){
      if( this.state.turn === 1){
        this.handleAdd();
        this.state.turn = 2;
        return this.state.hp2 - this.randomAttack(this.state.strength1, level);
    }
  }

  attack2(level){
    if( this.state.turn === 2){
      this.handleAdd();
      this.state.turn = 1;
      return this.state.hp1 - this.randomAttack(this.state.strength2, level);
    }
  }

  player1Lose(){
    return "http://localhost:4000"+this.state.image1;
  }

  player2Lose(){
    return "http://localhost:4000"+this.state.image2;
  }

  player1PrimaryAttack() {
    this.state.hp2 >= 12 ? this.setState({hp2: this.attack1(6)}) : this.setState({showGameOver: true, show: false})
    this.setState({loser: this.player2Lose()});
  }

  player1SecondaryAttack() {
    this.state.hp2 >= 12 ? this.setState({hp2: this.attack1(9)}) : this.setState({showGameOver: true, show: false})
    this.setState({loser: this.player2Lose()});
  }

  player2PrimaryAttack() {
    this.state.hp1 >= 12 ? this.setState({hp1: this.attack2(6)}) : this.setState({showGameOver: true, show: false})
    this.setState({loser: this.player1Lose()});
  }

  player2SecondaryAttack() {
    this.state.hp1 >= 12 ? this.setState({hp1: this.attack2(9)}) : this.setState({showGameOver: true, show: false})
    this.setState({loser: this.player1Lose()});
  }

  handleAdd() {
    const newItems = [this.state.picturesData[Math.floor(Math.random() * this.state.picturesData.length)]];
    this.setState({items: newItems});
  }

  render() {
    if(!this.state.picturesData){
      return <p>Loading Battle...</p>
    } else {

      const picture = this.state.items.map((item) => (
        <img class="power" src={"http://localhost:4000/" + item.image} key={item.id} height="250px" width="300px"/>
      ));

      return (
      <span>
        <ToggleDisplay show={this.state.show}>
          <div id='player1'>
          <div class='circle'></div>
            <div class='p1name'>
              <p>{this.props.player1.name}</p>
            </div>
            <div class ="h1">
            <p>Hit Points: {this.state.hp1}</p>
            </div>
            <img class="p1" src={"http://localhost:4000" + this.props.player1.image.url} height="150px" width="150px" />
            <button class="attack1" onClick={this.player1PrimaryAttack}>{this.props.player1.actions[0].name}</button>
            <button class="attack2" onClick={this.player1SecondaryAttack}>{this.props.player1.actions[1].name}</button>
          </div>
          <br />
              {picture}
          <br />
          <div id='player2'>
          <div class='circle2'></div>
            <div class='p2name'>
              <p>{this.props.player2.name}</p>
            </div>
            <div class ="h2">
            <p>Hit Points: {this.state.hp2}</p>
            </div>
            <img class="p2" src={"http://localhost:4000" + this.props.player2.image.url} height="150px" width="150px"/>
            <button class="attack3" onClick={this.player2PrimaryAttack}>{this.props.player2.actions[0].name}</button>
            <button class="attack4" onClick={this.player2SecondaryAttack}>{this.props.player2.actions[1].name}</button>
          </div>
        </ToggleDisplay>
        <ToggleDisplay show={this.state.showGameOver}>
          <GameOver image={this.state.loser} />
        </ToggleDisplay>
      </span>

    );
    }
  }
}
export default Battle;
