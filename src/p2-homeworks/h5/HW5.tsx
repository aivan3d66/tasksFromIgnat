import React, {useState} from 'react'
import Header from './Header'
import RoutesContainer from './Routes'

export type OnBtnHandler = () => void;

function HW5() {
  const [menu, setMenu] = useState<boolean>(true)
  const onBtnHandler: OnBtnHandler = () => setMenu(!menu);

  return (
    <div>
      <Header menu={menu} onBtnHandler={onBtnHandler}/>
      <RoutesContainer/>
    </div>
  )
}

export default HW5
