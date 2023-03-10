import React, { useState } from 'react'

const PlayerForm = ({ players, setPlayers }) => {
  const [newPlayer, setNewPlayer] = useState('')

  const handlePlayerChange = (event) => {
    setNewPlayer(event.target.value)
  }

  const addPlayer = (event) => {
    event.preventDefault()
    if (newPlayer === '') {
      window.alert('Name can not be empty')
      return
    }

    //check for duplicates and inform user no duplicates allowed
    let duplicate = players.find(player => player === newPlayer)
    if (typeof duplicate !== 'undefined') {
      window.alert('Cannot have duplicate players')
      return
    }

    //using the original state doesn't rerender components so using a copy
    let allPlayers = [...players]
    allPlayers.push(newPlayer)
    setPlayers(allPlayers)
    setNewPlayer('')
  }

  return (
    <div>
      <h1>Add players</h1>
      <form onSubmit={addPlayer}>
        <div style={{ fontSize: 25, color: 'white', fontFamily: 'Bold' }}>
          Player: <input
            minLength={2}
            maxLength={10}
            value={newPlayer}
            onChange={handlePlayerChange}
            placeholder = 'add player'
            type="text"
          />
          <button type="submit" className='buttonForm'>add</button>
        </div>
      </form>
    </div>
  )
}

export default PlayerForm