import React from 'react'
import Display from '../components/playComponents/Display'

const Play = ({ checkedPackages, players, questions }) => {
  // if packages or players state has reset return empty
  if (checkedPackages.length === 0 || players === 0 || questions === 0) {
    return (
      <></>
    )
  }

  //append packages that have their checkbox checked with true state to packageList
  let packageList = []
  checkedPackages.forEach(checkedPackage => {
    if (Object.values(checkedPackage)[0]) {
      packageList.push(Object.keys(checkedPackage)[0])
    }
  })

  //filter questions based on packages that have their checkbox checked with true state
  const filteredQuestions = questions.filter(question => packageList.includes(question.pack))

  return (
    <div>
      <div className="context" style={{ zIndex: 1 }}>
        <Display filteredQuestions={filteredQuestions} players={players} />
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