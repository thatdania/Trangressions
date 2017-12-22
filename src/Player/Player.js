import React from 'react'
import './Player.css'

class Player extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
    this.show = this.show.bind(this)
    this.hide = this.hide.bind(this)
  }

  show() {
    this.setState(
      { testState: true }
    );
  }

  hide() {
    this.setState(
      { testState: false }
    )
  }

  render(){
    console.log(this.props)
    return (

      <div className='playerSheet' onClick={this.props.click} onMouseOver={this.show} onMouseOut={this.hide}>
      <p>{this.props.name}</p>
      <img style={{width: 60, height: 60}} src={this.props.image} />
      <img style={{width: 100, height: 100}} class="image" src={this.props.image}></img>
      { this.state.testState ? <p>Health: {this.props.hp} <br></br> Strength: {this.props.strength}</p> : null }
      </div>
    );
  }
}

export default Player;
