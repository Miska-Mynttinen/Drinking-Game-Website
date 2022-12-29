import React from 'react'

const DisplayPlayer = ({ player, players, setPlayers }) => {

  const handleDelete = () => {
    setPlayers(players.filter(p => p !== player))
    console.log('player deleted', player)
  }

  return (
    <div>
      {player} <button onClick={handleDelete}>delete</button>
    </div>
  )
}

export default DisplayPlayer