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
<<<<<<< HEAD
    <img style={{width: 60, height: 60}} src={props.image} title={hover.name} />
=======
    <img style={{width: 80, height: 80}} class="image" src={props.image}></img>
>>>>>>> cdee4c512fda379f4d3beb389210bb16f7746f55
    </div>

  )
}

export default Player;
