import React from 'react'
import DisplayPlayer from './DisplayPlayer'

const DisplayPlayers = ({ players }) => {
  return (
    <>
      <div>
        {players.map(player =>
          <div key={player}>
            <DisplayPlayer player={player}/>
          </div>
        )}
      </div>
    </>
  )
}

export default DisplayPlayers