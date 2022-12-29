import React from 'react'

const PlayerQuestion = ({ question, player }) => {
  switch (question.type) {
    case 'truth_or_drink':
      return (
        <div>
          <div>{player}</div>
          <div>Truth or Drink {question.sips} sips</div>
          <div>{question.question}</div>
        </div>
      )
    case 'dare_or_drink': {
      return (
        <div>
          <div>{player}</div>
          <div>Dare or Drink {question.sips} sips</div>
          <div>{question.question}</div>
        </div>
      )
    }
  }
}

export default PlayerQuestion