import React from 'react'

const TopText = () => {
  const topTextStyle = {
    zIndex: 1,
    marginBottom: 25,
    fontFamily: 'Trocchi',
    color: 'white'
  }
  return (
    <div style={topTextStyle}>
      Select packages and click play
    </div>
  )
}

export default TopText