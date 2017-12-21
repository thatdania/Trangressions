import './App.css';
import React, { Component } from 'react';
import {CSSTransitionGroup} from 'react-transition-group';
import './Battle.css'

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
      items: []
    };
    this.player1PrimaryAttack = this.player1PrimaryAttack.bind(this);
    this.player2PrimaryAttack = this.player2PrimaryAttack.bind(this);
    this.player1SecondaryAttack = this.player1SecondaryAttack.bind(this);
    this.player2SecondaryAttack = this.player2SecondaryAttack.bind(this);
  }

  randomAttack1(strength , crit){
    if((Math.random()* 100) < crit){
      return (Math.floor(((Math.random() * 4) + 6)*(strength/100)))*2
    } else{
      return Math.floor(((Math.random() * 4) + 6)*(strength/100))
    };
  }

  randomAttack2 (strength, crit) {
    if((Math.random()* 100) < crit){
      return (Math.floor(((Math.random() * 4) + 9)*(strength/100)))*2
    } else{
      return Math.floor(((Math.random() * 4) + 9)*(strength/100))
    };
  }

  player1PrimaryAttack() {
    if (this.state.turn === 1) {
      this.setState({hp2: this.state.hp2 - this.randomAttack1(this.state.strength1, this.state.crit1)});
      this.state.turn = 2;
      this.handleAdd("http://localhost:4000" + this.props.player1.image.url)
    }
  }
  player1SecondaryAttack() {
    if (this.state.turn === 1) {
     this.setState({hp2: this.state.hp2 - this.randomAttack2(this.state.strength1, this.state.crit1)});
     this.state.turn = 2;
     this.handleAdd("http://localhost:4000" + this.props.player1.image.url)
   }
  }

  player2PrimaryAttack() {
    if (this.state.turn === 2) {
     this.setState({hp1: this.state.hp1 - this.randomAttack1(this.state.strength2, this.state.crit2)});
     this.state.turn = 1;
     this.handleAdd("http://localhost:4000" + this.props.player2.image.url)
   }
  }
  player2SecondaryAttack() {
    if (this.state.turn === 2) {
     this.setState({hp1: this.state.hp1 - this.randomAttack2(this.state.strength2, this.state.crit2)});
     this.state.turn = 1;
     this.handleAdd("http://localhost:4000" + this.props.player2.image.url)
   }
  }

  handleAdd(url) {
    const newItems = [url]
    this.setState({items: newItems});
  }

  render() {

    const items = this.state.items.map((item, i) => (
      <img src={item} key={item} height="100px" width="100px"/>
    ));
    console.log(items)

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
            {items}
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
