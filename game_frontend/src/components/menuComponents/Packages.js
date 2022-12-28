import { useEffect, useState } from 'react'
import Emoji from './Emoji'

const Packages = ({ setCheckedPackages }) => {
  const [standardChecked, setStandardChecked] = useState(false)
  const [school_and_work_checked, set_school_and_work_checked] = useState(false)
  const [bruhChecked, setBruhChecked] = useState(false)
  const [dirtyChecked, setDirtyChecked] = useState(false)

  const handleChangeStandard = () => {
    setStandardChecked(!standardChecked)
  }

  const handle_change_school_and_work = () => {
    set_school_and_work_checked(!school_and_work_checked)
  }

  const handleChangeBruh = () => {
    setBruhChecked(!bruhChecked)
  }

  const handleChangeDirty = () => {
    setDirtyChecked(!dirtyChecked)
  }

  //updates CheckedPackages only after a checkbox has been clicked instead of before click is finished.
  useEffect(() => {
    setCheckedPackages([{ standard: standardChecked }, { school_and_work: school_and_work_checked }, { bruh: bruhChecked }, { dirty: dirtyChecked }])
  }, [standardChecked, school_and_work_checked, bruhChecked, dirtyChecked])

  return (
    <div>
      <div className='package'>
        <Checkbox label='  Standard' value={standardChecked} onChange={handleChangeStandard} br/>
      </div>
      <div className='package'>
        <Checkbox label='  School and work' value={school_and_work_checked} onChange={handle_change_school_and_work}/>
      </div>
      <div className='package'>
        <Checkbox label={<Emoji symbol='💀' label='bruh'/>} value={bruhChecked} onChange={handleChangeBruh}/>
      </div>
      <div className='package'>
        <Checkbox label={<Emoji symbol='💋' label='dirty'/>} value={dirtyChecked} onChange={handleChangeDirty}/>
      </div>
    </div>
  )

}


const Checkbox = ({ label, value, onChange }) => {
  return (
    <label>
      <input type='checkbox' checked={value} onChange={onChange} />
      {label}
    </label>
  )
}


export default Packages