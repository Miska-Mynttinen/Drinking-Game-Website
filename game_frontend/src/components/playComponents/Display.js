import { useState } from 'react'
import PlayerQuestion from './displayComponents/PlayerQuestion'
import AllQuestion from './displayComponents/AllQuestion'
import NextButton from './displayComponents/NextButton'

const Display = ({ filteredQuestions, players }) => {
  console.log('players', players)
  // eslint-disable-next-line no-unused-vars
  const [questions, setQuestions] = useState(filteredQuestions)
  // eslint-disable-next-line no-unused-vars
  const [rand, setRand] = useState(Math.floor(Math.random() * filteredQuestions.length))

  // Select a random question and player based on index
  let selectedQuestion = questions[rand]

  switch (selectedQuestion.who) {
    case 'player':
      return (
        <div>
          <PlayerQuestion question={selectedQuestion} player={players[Math.floor(Math.random() * players.length)]} />
          <NextButton selectedQuestion={selectedQuestion} questions={questions} setQuestions={setQuestions} setRand={setRand} />
        </div>
      )
    case 'all':
      return (
        <div>
          <AllQuestion question={selectedQuestion} />
          <NextButton selectedQuestion={selectedQuestion} questions={questions} setQuestions={setQuestions} setRand={setRand} />
        </div>
      )
  }
}

export default Display