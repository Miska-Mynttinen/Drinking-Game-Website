import React, { useState } from 'react'

const PlayerForm = ({ players, setPlayers }) => {
  const [newPlayer, setNewPlayer] = useState('')

  const handlePlayerChange = (event) => {
    setNewPlayer(event.target.value)
  }

  const addPlayer = (event) => {
    event.preventDefault()

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
      <div>Add players</div>
      <form onSubmit={addPlayer}>
        <div>
          player: <input
            value={newPlayer}
            onChange={handlePlayerChange}
            placeholder = 'add player'
          />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default PlayerForm