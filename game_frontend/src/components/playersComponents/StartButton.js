import React from 'react'
import { Link } from 'react-router-dom'

const StartButton = ({ players }) => {
  if (players.length > 1) {
    return (
      <div>
        <Link to="/play">
          <button type='button' className='buttonStart'>
            Start
          </button>
        </Link>
      </div>
    )
  }
}

export default StartButton