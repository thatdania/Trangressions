import './App.css';
import React, { Component } from 'react';

// import { Api } from './Api'
// import Player from './Player/Player'

class Battle extends Component {
  constructor(props){
    super(props);
    this.state = {
      hp1: this.props.hp1,
      hp2: this.props.hp2
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
          <p>{this.props.name1}</p>
          <p>Hit Points: {this.state.hp1}</p>
          <button onClick={this.action1}>{this.props.action1}</button>
        </div>
        <div id='player2'>
          <p>{this.props.name2}</p>
          <p>Hit Points: {this.state.hp2}</p>
          <button onClick={this.action2}>{this.props.action2}</button>
        </div>


      </span>
    );
}
}
export default Battle;