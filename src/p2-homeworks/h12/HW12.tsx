import React, {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {
  darkScheme,
  setDarkTheme,
  setWhiteTheme,
  whiteScheme
} from "../../p1-main/m1-ui/u1-app/redux/reducer/themeReducer";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";

const THEMES = {
  LIGHT: 'light',
  DARK: 'dark'
}
const themeArr = [THEMES.LIGHT, THEMES.DARK];

function HW12() {
  const dispatch = useDispatch();

  const onChangeDarkThemeHandler = () => {
    dispatch(setDarkTheme(darkScheme))
  }
  const onChangeLightThemeHandler = () => {
    dispatch(setWhiteTheme(whiteScheme))
  }

  return (
    <div>
      <h2>Homeworks 12</h2>
      <div style={{
        display: "flex",
        justifyContent: "center",
      }}>
        <div style={{
          backgroundColor: "rgba(169, 169, 169, 1)",
          border: "1px solid white",
          borderRadius: "50px",
        }}>
          <IconButton onClick={onChangeLightThemeHandler}>
            <WbSunnyRoundedIcon style={{color: "yellow"}}/>
          </IconButton>
          <IconButton onClick={onChangeDarkThemeHandler}>
            <ModeNightRoundedIcon style={{color: "gold"}}/>
          </IconButton>
        </div>
      </div>
      <hr/>
    </div>
  );
}

export default HW12;
