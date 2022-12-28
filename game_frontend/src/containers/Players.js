import React from 'react'
import PlayerForm from '../components/playersComponents/PlayerForm'
import DisplayPlayers from '../components/playersComponents/DisplayPlayers'
import StartButton from '../components/playersComponents/StartButton'

const Players = ({ players, setPlayers }) => {
  return (
    <div>
      <div className="context" style={{ zIndex: 1 }}>
        <PlayerForm players={players} setPlayers={setPlayers} />
        <DisplayPlayers players={players} />
        <StartButton players={players}/>
      </div>
      <div className="area" >
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >
    </div>
  )
}

export default Players