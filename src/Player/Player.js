import React from 'react'
import './Player.css'

const Player = (props) => {
  return(
    <div className='playerSheet' onClick={props.click}>
    <p>{props.name}</p>
    <p> {props.hp} </p>
    <p> {props.strength} </p>
    <img style={{width: 80, height: 80}} class="image" src={props.image}></img>
    </div>
  )
}

export default Player;
