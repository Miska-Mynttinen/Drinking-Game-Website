import React from 'react'
import Display from '../components/playComponents/Display'

const Play = ({ checkedPackages, players, questions }) => {
  //append packages that have their checkbox checked with true state to packageList
  let packageList = []
  checkedPackages.forEach(checkedPackage => {
    if (Object.values(checkedPackage)[0]) {
      packageList.push(Object.keys(checkedPackage)[0])
    }
  })
  console.log('packageList', packageList)

  //filter questions based on packages that have their checkbox checked with true state
  let filteredQuestions = []
  filteredQuestions = questions.filter(question => packageList.includes(question.pack))
  console.log('filteredQuestions', filteredQuestions)

  // get a copy of players to pass on to display
  let allPlayers = [...players]

  return (
    <div>
      <div className="context" style={{ zIndex: 1 }}>
        <Display filteredQuestions={filteredQuestions} players={allPlayers} />
      </div>
      <div className="area" >
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >
    </div>
  )
}

export default Play