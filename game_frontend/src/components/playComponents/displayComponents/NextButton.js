import React from 'react'

const NextButton = ({ selectedQuestion, questions, setQuestions, setRand, filteredQuestions, players, selectedPlayer, setSelectedPlayer }) => {

  const handleNextClick = () => {
    // sets selectedPlayer to be someone else then the previous one
    if  (selectedQuestion.who === 'player') {
      setSelectedPlayer(players.filter(player => player !== selectedPlayer)[Math.floor(Math.random() * (players.length - 1))])
    }

    // resets questions and random number if running out of questions
    if (questions.length === 1) {
      setRand(Math.floor(Math.random() * filteredQuestions.length))
      setQuestions(filteredQuestions)
      return
    }

    // sets random number and removes asked question from the question pool
    setRand(Math.floor(Math.random() * (questions.length - 1)))
    setQuestions(questions.filter(question => question.question !== selectedQuestion.question))
  }


  return (
    <div>
      <button className='button1' onClick={handleNextClick}>
          Next
      </button>
    </div>
  )
}

export default NextButton