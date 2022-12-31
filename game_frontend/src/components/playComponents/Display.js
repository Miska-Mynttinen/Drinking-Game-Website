import { useState } from 'react'
import PlayerQuestion from './displayComponents/PlayerQuestion'
import AllQuestion from './displayComponents/AllQuestion'
import NextButton from './displayComponents/NextButton'

const Display = ({ filteredQuestions, players }) => {
  const [questions, setQuestions] = useState(filteredQuestions)
  const [rand, setRand] = useState(Math.floor(Math.random() * filteredQuestions.length))
  const [selectedPlayer, setSelectedPlayer] = useState(players[Math.floor(Math.random() * players.length)])

  // Select a random question based on index
  let selectedQuestion = questions[rand]

  // checks if question is for a single player or everyone and displays based on it
  switch (selectedQuestion.who) {
    case 'player': {
      return (
        <div>
          <div>
            <PlayerQuestion question={selectedQuestion} player={selectedPlayer} />
          </div>
          <div>
            <NextButton
              selectedQuestion={selectedQuestion}
              questions={questions}
              setQuestions={setQuestions}
              setRand={setRand}
              filteredQuestions={filteredQuestions}
              players={players}
              selectedPlayer={selectedPlayer}
              setSelectedPlayer={setSelectedPlayer}
            />
          </div>
        </div>
      )
    }
    case 'all': {
      return (
        <div>
          <div>
            <AllQuestion question={selectedQuestion} />
          </div>
          <div>
            <NextButton
              selectedQuestion={selectedQuestion}
              questions={questions}
              setQuestions={setQuestions}
              setRand={setRand}
              filteredQuestions={filteredQuestions}
              players={players}
              selectedPlayer={selectedPlayer}
              setSelectedPlayer={setSelectedPlayer}
            />
          </div>
        </div>
      )
    }
  }
}

export default Display