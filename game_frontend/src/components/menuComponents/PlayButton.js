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
    <>
      <div style={hideWhenVisible}>
        <button onClick={handleNoBoxesClick}>
          Play
        </button>
      </div>
      <div style={showWhenVisible}>
        <Link to="/play">
          <button type='button'>
            Play
          </button>
        </Link>
      </div>
    </>
  )
}

export default PlayButton