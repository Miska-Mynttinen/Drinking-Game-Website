// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from 'react'
//import questionService from './services/questions'
import { Routes, Route } from 'react-router-dom'
import Menu from './containers/Menu'
import Play from './containers/Play'

const App = () => {
  const [questions, setQuestions] = useState([])
  const [checkedPackages, setCheckedPackages] = useState([])

  /*useEffect(() => {
    questionService
      .getAll()
      .then(initialQuestions => {
        setQuestions(initialQuestions)
      })
  }, [])*/

  /*const handlePackageChange = packages => {
    setCheckedPackages(packages)
  }*/


  return (
    <div className="container">
      {/*create your own containers and components*/}
      <Routes>
        <Route exact path="/" element={<Menu checkedPackages={checkedPackages} setCheckedPackages={setCheckedPackages}/>}/>
        <Route exact path="/play" element={<Play questions={questions} setQuestions={setQuestions}/>} />
      </Routes>
    </div>
  )
}

export default App

