import React from 'react'
import {NavLink} from 'react-router-dom';
import {PATH} from "./Routes";

const s = require('./HW5.module.css');

function Header() {
  return (
    <nav className={s.navList}>
      <NavLink className={({isActive}) => `${s.nav__item} ${isActive ? s.nav__itemActive : ""}`}
               to={PATH.PRE_JUNIOR}>Pre-Junior</NavLink>
      <NavLink className={({isActive}) => `${s.nav__item} ${isActive ? s.nav__itemActive : ""}`}
               to={PATH.JUNIOR}>Junior</NavLink>
      <NavLink className={({isActive}) => `${s.nav__item} ${isActive ? s.nav__itemActive : ""}`}
               to={PATH.JUNIOR_PLUS}>Junior-Plus</NavLink>
    </nav>
  )
}

export default Header
