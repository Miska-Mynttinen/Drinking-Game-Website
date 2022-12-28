import { useEffect, useState } from 'react'
import './style/style.css'
import './style/circles.css'
import './style/button1.css'
import questionService from './services/questions'
import { Routes, Route } from 'react-router-dom'
import Menu from './containers/Menu'
import Players from './containers/Players'
import Play from './containers/Play'

const App = () => {
  const [checkedPackages, setCheckedPackages] = useState([])
  const [players, setPlayers] = useState([])
  const [questions, setQuestions] = useState([])

  useEffect(() => {
    questionService
      .getAll()
      .then(initialQuestions => {
        setQuestions(initialQuestions)
      })
  }, [])

  return (
    <div>
      {/*create your own containers and components*/}
      <Routes>
        <Route exact path="/" element={<Menu checkedPackages={checkedPackages} setCheckedPackages={setCheckedPackages} />}/>
        <Route exact path="/players" element={<Players players={players} setPlayers={setPlayers} />}/>
        <Route exact path="/play" element={<Play checkedPackages={checkedPackages} questions={questions} players={players} />}/>
      </Routes>
    </div>
  )
}

export default App

