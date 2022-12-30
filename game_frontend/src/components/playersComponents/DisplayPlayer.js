import React from 'react'

const DisplayPlayer = ({ player, players, setPlayers }) => {

  const handleDelete = () => {
    setPlayers(players.filter(p => p !== player))
    console.log('player deleted', player)
  }

  return (
    <div style={{ marginLeft: 5, fontFamily: 'Trocchi' }}>
      {player} <button onClick={handleDelete} className='buttonDelete'>delete</button>
    </div>
  )
}

export default DisplayPlayer