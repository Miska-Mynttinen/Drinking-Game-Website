import React from 'react'
import DisplayPlayer from './DisplayPlayer'

const DisplayPlayers = ({ players, setPlayers }) => {
  return (
    <>
      <div>
        {players.map(player =>
          <div key={player}>
            <DisplayPlayer player={player} players={players} setPlayers={setPlayers} />
          </div>
        )}
      </div>
    </>
  )
}

export default DisplayPlayers