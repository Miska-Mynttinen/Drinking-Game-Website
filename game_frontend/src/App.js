import { useEffect, useState } from 'react'
import './style/style.css'
import './style/circles.css'
import './style/buttons.css'
import questionService from './services/questions'
import { Routes, Route } from 'react-router-dom'
import Menu from './containers/Menu'
import Players from './containers/Players'
import Play from './containers/Play'

const App = () => {
  const [checkedPackages, setCheckedPackages] = useState([])
  const [players, setPlayers] = useState([])
  const [questions, setQuestions] = useState([])

  /* NO LONGER DOES ANYTHING BECAUSE REROUTING WHEN REFRESHING DONE FROM BACKEND
  // keep track of users page location and history
  const location = useLocation()
  const navigate = useNavigate()*/

  useEffect(() => {
    // get all questions
    questionService
      .getAll()
      .then(initialQuestions => {
        setQuestions(initialQuestions)
      })

    /* NO LONGER DOES ANYTHING BECAUSE REROUTING WHEN REFRESHING DONE FROM BACKEND
    // check if user is not on the Menu page when refreshing site and redirect them to the main page
    /* eslint-disable quotes
    if (location.pathname === "/players" || location.pathname === "/play") {
      navigate("/")
      /* eslint-enable quotes
    }
    */
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

