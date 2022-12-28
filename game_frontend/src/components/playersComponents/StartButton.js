import React from 'react'
import { Link } from 'react-router-dom'

// eslint-disable-next-line no-unused-vars
const StartButton = ({ players }) => {
  if (players.length > 1) {
    return (
      <div>
        <Link to="/play">
          <button type='button' className='button1'>
            Start
          </button>
        </Link>
      </div>
    )
  }
}

export default StartButton