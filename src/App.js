import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    fetch('http://localhost:4000/api/players/players.json')
      .then(d => d.json())
      .then(d => {
        this.setState({
          playerData: d
        })
      })
  }

  render() {

    if (!this.state.playerData) {
      return <p>Loading Players...</p>
    } else {
      return (
        <p>{this.state.playerData[0].name}</p>
      );
    }
  }
}

export default App;
