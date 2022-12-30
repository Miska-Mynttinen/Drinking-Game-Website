import React from 'react'
import Emoji from '../../menuComponents/Emoji'

const AllQuestion = ({ question }) => {
  switch (question.type) {
    case 'general': {
      return (
        <div className='questionFlip' key={Math.random()}>
          <div className='questionBox' style={{ backgroundColor: '#F47174' }}>
            <div className='question'>{question.question}</div>
            <div style={{ textAlign: 'center' }}>Drink {question.sips} sips</div>
          </div>
        </div>
      )
    }
    case 'would_you_rather': {
      return (
        <div className='questionFlip' key={Math.random()}>
          <div className='questionBox' style={{ backgroundColor: '#B7825F' }}>
            <div className='playerName'>Everyone votes {<Emoji symbol='👍' label=''/>} or {<Emoji symbol='👎' label=''/>}</div>
            <div className='question'>{question.question}</div>
            <div className='questionType'>The outvoted drink {question.sips} sips</div>
          </div>
        </div>
      )
    }
    case 'most_likely_to': {
      return (
        <div className='questionFlip' key={Math.random()}>
          <div className='questionBox' style={{ backgroundColor: '#AF8FE9' }}>
            <div className='playerName'>Everyone points{<Emoji symbol='👈' label=''/>}</div>
            <div className='question'>{question.question}</div>
            <div className='questionType'>The chosen one drinks {question.sips} sips</div>
          </div>
        </div>
      )
    }
  }
}

export default AllQuestion