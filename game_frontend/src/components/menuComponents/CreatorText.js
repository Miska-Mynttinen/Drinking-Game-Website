import React from 'react'

const CreatorText = () => {
  const creatorStyle = {
    fontSize: '10px',
    position: 'absolute',
    top: '95%',
    right: '0%',
  }

  return (
    <div style={creatorStyle}>
      <div>Created by: Miska Mynttinen</div>
      <div><a href="https://github.com/Miska-Mynttinen/Drinking-Game-Website">Github</a></div>
      <div><a href="https://codepen.io/mohaiman/pen/MQqMyo">Background creator: Mohammad Abdul Mohaiman &nbsp;</a></div>
    </div>
  )
}

export default CreatorText