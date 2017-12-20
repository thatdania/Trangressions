import React from 'react'
import './Player.css'

const Player = (props) => {
  return(
    <div className='playerSheet'>
    <p onClick={props.click} >{props.name}</p>
    <p> {props.hp} </p>
    <p> {props.strength} </p>
    <img style={{width: 60, height: 60}} src={props.image}></img>
    </div>
  )
}



export default Player;
