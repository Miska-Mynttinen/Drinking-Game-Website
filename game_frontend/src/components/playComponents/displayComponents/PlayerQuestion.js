import React from 'react'

const PlayerQuestion = ({ question, player }) => {
  switch (question.type) {
    case 'truth_or_drink': {
      return (
        <div className='questionFlip' key={Math.random()}>
          <div className='questionBox' style={{ backgroundColor: '#93CAED' }}>
            <div className='playerName'>{player}</div>
            <div className='questionType'>Truth or Drink {question.sips} sips</div>
            <div className='question'>{question.question}</div>
          </div>
        </div>
      )
    }
    case 'dare_or_drink': {
      return (
        <div className='questionFlip' key={Math.random()}>
          <div className='questionBox' style={{ backgroundColor: '#bfe3b4' }}>
            <div className='playerName'>{player}</div>
            <div className='questionType'>Dare or Drink {question.sips} sips</div>
            <div className='question'>{question.question}</div>
          </div>
        </div>
      )
    }
    case 'choose': {
      return (
        <div className='questionFlip' key={Math.random()}>
          <div className='questionBox' style={{ backgroundColor: '#FAC898' }}>
            <div className='playerName'>{player}</div>
            <div className='question'>{question.question}</div>
            <div className='questionType'>If successful choose which player drinks {question.sips} sips</div>
          </div>
        </div>
      )
    }
  }
}

export default PlayerQuestion