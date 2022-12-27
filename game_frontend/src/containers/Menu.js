import React from 'react'
import TopText from '../components/menuComponents/TopText'
import PlayButton from '../components/menuComponents/PlayButton'
import Packages from '../components/menuComponents/Packages'


// eslint-disable-next-line no-unused-vars
const Menu = ({ checkedPackages, setCheckedPackages }) => {
  return (
    <div>
      <TopText />
      <PlayButton checkedBoxes={checkedPackages.length} />
      <Packages setCheckedPackages={setCheckedPackages}/>
    </div>
  )
}

export default Menu