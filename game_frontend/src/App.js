import { useEffect, useState } from 'react'
import questionService from './services/questions'
import { Routes, Route } from 'react-router-dom'
import Menu from './containers/Menu'
import Play from './containers/Play'

const App = () => {
  const [questions, setQuestions] = useState([])
  useEffect(() => {
    questionService
      .getAll()
      .then(initialQuestions => {
        setQuestions(initialQuestions)
      })
  }, [])

  return (
    <div className="container">
      {/*create your own containers and components*/}
      <Routes>
        <Route exact path="/" element={<Menu setQuestions={setQuestions}/>}/>
        <Route exact path="/play" element={<Play questions={questions} setQuestions={setQuestions}/>} />
      </Routes>
    </div>
  )
}

export default App

