import React from 'react'
import {NavLink} from 'react-router-dom';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import {PATH} from "./Routes";
import {OnBtnHandler} from "./HW5";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
const s = require('./HW5.module.css');

type HeaderProps = {
  menu: boolean,
  onBtnHandler: OnBtnHandler
}


const Header: React.FC<HeaderProps> = ({menu, onBtnHandler}) => {
  const hideMenuClass = `${menu ? s.hide : s.navList} ${s.navList}`

  return (
    <div className={s.headerContainer}>
      <SuperButton
        onClick={onBtnHandler}
        className={s.menuBtn}>
        <MenuRoundedIcon/>
      </SuperButton>
      {
        menu
          ? <nav className={hideMenuClass}></nav>
          : <nav className={hideMenuClass}>
            <NavLink className={({isActive}) => `${s.nav__item} ${isActive ? s.nav__itemActive : ""}`}
                     to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink>
            <NavLink className={({isActive}) => `${s.nav__item} ${isActive ? s.nav__itemActive : ""}`}
                     to={PATH.JUNIOR}>Junior</NavLink>
            <NavLink className={({isActive}) => `${s.nav__item} ${isActive ? s.nav__itemActive : ""}`}
                     to={PATH.JUNIOR_PLUS}>Junior-Plus</NavLink>
          </nav>
      }
    </div>

  )
}

export default Header
