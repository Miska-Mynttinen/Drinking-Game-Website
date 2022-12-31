import React from 'react'
import { Link } from 'react-router-dom'

const PlayButton = ({ checkedPackages }) => {
  let view = false

  // if a package is selected make view "" true so the game can start
  checkedPackages.forEach(checked => {
    if (Object.values(checked)[0] === true) {
      view = true
    }
  })

  const hideWhenVisible = { display: view ? 'none' : '' }
  const showWhenVisible = { display: view ? '' : 'none' }

  const handleNoBoxesClick = () => {
    window.alert('Select packages before playing')
  }

  return (
    <div>
      <div style={hideWhenVisible}>
        <button className='buttonPlay' onClick={handleNoBoxesClick}>
          Play
        </button>
      </div>
      <div style={showWhenVisible}>
        <Link to="/players">
          <button type='button' className='buttonPlay'>
            Play
          </button>
        </Link>
      </div>
    </div>
  )
}

export default PlayButton