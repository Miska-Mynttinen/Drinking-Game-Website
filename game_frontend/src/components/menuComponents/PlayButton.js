import React from 'react'
import { Link } from 'react-router-dom'

const PlayButton = ({ checkedBoxes }) => {
  let view = false

  if (checkedBoxes > 0) {
    view = true
  }

  const hideWhenVisible = { display: view ? 'none' : '' }
  const showWhenVisible = { display: view ? '' : 'none' }

  const handleNoBoxesClick = () => {
    window.alert('Select packages before playing')
  }

  return (
    <div style={{ zIndex: 1 }}>
      <div style={hideWhenVisible}>
        <button className='button1' onClick={handleNoBoxesClick}>
          Play
        </button>
      </div>
      <div style={showWhenVisible}>
        <Link to="/play">
          <button type='button' className='button1'>
            Play
          </button>
        </Link>
      </div>
    </div>
  )
}

export default PlayButton