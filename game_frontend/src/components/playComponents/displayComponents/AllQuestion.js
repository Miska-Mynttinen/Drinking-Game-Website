import React from 'react'
import Emoji from '../../menuComponents/Emoji'

const AllQuestion = ({ question }) => {
  switch (question.type) {
    case 'general':
      return (
        <div>
          <div>{question.question}</div>
          <div>Take {question.sips} sips</div>
        </div>
      )
    case 'would_you_rather': {
      return (
        <div>
          <div>Everyone votes {<Emoji symbol='👍' label=''/>} or {<Emoji symbol='👎' label=''/>}</div>
          <div>{question.question}</div>
          <div>The outvoted take {question.sips} sips</div>
        </div>
      )
    }
  }
}

export default AllQuestion