import React from 'react'
import './Player.css'

const Player = (props) => {
  return(
    <div className='playerSheet'>
    {props.name}
    </div>
  )
}

export default Player;
