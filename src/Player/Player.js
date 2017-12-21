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
    <img style={{width: 60, height: 60}} src={props.image} title={hover.name} />
    </div>

  )
}

export default Player;
