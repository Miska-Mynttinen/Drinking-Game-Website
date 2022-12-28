import React from 'react'
import TopText from '../components/menuComponents/TopText'
import PlayButton from '../components/menuComponents/PlayButton'
import Packages from '../components/menuComponents/Packages'
import CreatorText from '../components/menuComponents/CreatorText'

const Menu = ({ checkedPackages, setCheckedPackages }) => {
  return (
    <div>
      <div className="context" style={{ zIndex: 1 }}>
        <TopText />
        <PlayButton checkedPackages={checkedPackages}/>
        <Packages setCheckedPackages={setCheckedPackages}/>
        <CreatorText />
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

export default Menu