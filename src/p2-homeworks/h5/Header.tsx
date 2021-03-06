import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from "./Routes";
import {OnBtnHandler} from "./HW5";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import {IconButton} from "@mui/material";
import s from './HW5.module.css';

type HeaderProps = {
  menu: boolean,
  onBtnHandler: OnBtnHandler
}

const Header: React.FC<HeaderProps> = ({menu, onBtnHandler}) => {
  const hideMenuClass = `${menu ? s.hide : s.navList} ${s.navList}`

  return (
    <div className={s.headerContainer}>
      <IconButton
        size="large"
        edge="start"
        aria-label="menu"
        sx={{mr: 2}}
        onClick={onBtnHandler}
        style={{margin: "20px 0"}}
      >
        <MenuRoundedIcon/>
      </IconButton>
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
