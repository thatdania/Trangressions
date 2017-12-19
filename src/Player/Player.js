import React from 'react'
import './Player.css'

const Player = (props) => {
  return(
    <div className='playerSheet'>
    <p onClick={props.click} >{props.name}</p>
    </div>
  )
}



export default Player;
