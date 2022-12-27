import { useState } from 'react'
import Emoji from './Emoji'

const Packages = ({ setCheckedPackages }) => {
  const [standardChecked, setStandardChecked] = useState(false)
  const [school_and_work_checked, set_school_and_work_checked] = useState(false)
  const [bruhChecked, setBruhChecked] = useState(false)
  const [dirtyChecked, setDirtyChecked] = useState(false)


  const handleChangeStandard = () => {
    setStandardChecked(!standardChecked)
    setCheckedPackages([{ standard: standardChecked }, { school_and_work: school_and_work_checked }, { bruh: bruhChecked }, { dirty: dirtyChecked }])
  }

  const handle_change_school_and_work = () => {
    set_school_and_work_checked(!school_and_work_checked)
    setCheckedPackages([{ standard: standardChecked }, { school_and_work: school_and_work_checked }, { bruh: bruhChecked }, { dirty: dirtyChecked }])
  }

  const handleChangeBruh = () => {
    setBruhChecked(!bruhChecked)
    setCheckedPackages([{ standard: standardChecked }, { school_and_work: school_and_work_checked }, { bruh: bruhChecked }, { dirty: dirtyChecked }])
  }

  const handleChangeDirty = () => {
    setDirtyChecked(!dirtyChecked)
    setCheckedPackages([{ standard: standardChecked }, { school_and_work: school_and_work_checked }, { bruh: bruhChecked }, { dirty: dirtyChecked }])
  }

  return (
    <div>
      <Checkbox label='Standard' value={standardChecked} onChange={handleChangeStandard}/>
      <Checkbox label='School and work' value={school_and_work_checked} onChange={handle_change_school_and_work}/>
      <Checkbox label={<Emoji symbol='💀' label='bruh'/>} value={bruhChecked} onChange={handleChangeBruh}/>
      <Checkbox label={<Emoji symbol='💋' label='dirty'/>} value={dirtyChecked} onChange={handleChangeDirty}/>
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