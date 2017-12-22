import React from 'react'
import './Player.css'

const Player = props => {

const hover =
  (

  <p>{props.name}</p>

  )

  return(
    <div className='playerSheet' onClick={props.click}>
    <p>{props.name}</p>
    <p> {props.hp} </p>
    <p> {props.strength} </p>
    <img style={{width: 100, height: 100}} class="image" src={props.image}></img>
    </div>

  )
}

export default Player;
