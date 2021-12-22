import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Error404 from './pages/Error404';
import PreJunior from './pages/PreJunior';
import {Junior} from "./pages/Junior";
import {JuniorPlus} from "./pages/JuniorPlus";

export const PATH = {
  DEFAULT_ROUTE: '/',
  PRE_JUNIOR: '/pre-junior',
  JUNIOR: '/junior',
  JUNIOR_PLUS: '/junior-plus',
}

function RoutesContainer() {
  return (
    <div>
      <Routes>
        <Route path={PATH.DEFAULT_ROUTE} element={<PreJunior/>}/>
        <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
        <Route path={PATH.JUNIOR} element={<Junior/>}/>
        <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>

        {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
        <Route element={<Error404/>}/>
      </Routes>
    </div>
  )
}

export default RoutesContainer
