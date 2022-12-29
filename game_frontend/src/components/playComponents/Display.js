import { useState } from 'react'
import PlayerQuestion from './displayComponents/PlayerQuestion'
import AllQuestion from './displayComponents/AllQuestion'
import NextButton from './displayComponents/NextButton'

const Display = ({ filteredQuestions, players }) => {
  const [questions, setQuestions] = useState(filteredQuestions)
  const [rand, setRand] = useState(Math.floor(Math.random() * filteredQuestions.length))

  // Select a random question and player based on index
  let selectedQuestion = questions[rand]

  // checks if question is for a single player or everyone and displays based on it
  switch (selectedQuestion.who) {
    case 'player':
      return (
        <div>
          <div>
            <PlayerQuestion question={selectedQuestion} player={players[Math.floor(Math.random() * players.length)]} />
          </div>
          <div>
            <NextButton selectedQuestion={selectedQuestion} questions={questions} setQuestions={setQuestions} setRand={setRand} filteredQuestions={filteredQuestions} />
          </div>
        </div>
      )
    case 'all':
      return (
        <div>
          <div>
            <AllQuestion question={selectedQuestion} />
          </div>
          <div>
            <NextButton selectedQuestion={selectedQuestion} questions={questions} setQuestions={setQuestions} setRand={setRand} filteredQuestions={filteredQuestions} />
          </div>
        </div>
      )
  }
}

export default Display