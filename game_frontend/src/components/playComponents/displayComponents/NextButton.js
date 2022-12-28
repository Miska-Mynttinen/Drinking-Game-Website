import { useEffect } from 'react'

const NextButton = ({ selectedQuestion, questions, setQuestions, setRand }) => {

  const handleNextClick = () => {
    setQuestions(questions.filter(question => question.question !== selectedQuestion))
  }

  useEffect(() => {
    setRand(Math.floor(Math.random() * questions.length))
  }, [questions])


  return (
    <div>
      <button className='button1' onClick={handleNextClick}>
          Next
      </button>
    </div>
  )
}

export default NextButton