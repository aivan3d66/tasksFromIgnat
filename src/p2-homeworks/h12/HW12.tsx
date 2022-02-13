import React from "react";
import {useDispatch} from "react-redux";
import {
  darkScheme,
  setDarkTheme,
  setWhiteTheme,
  whiteScheme
} from "../../p1-main/m1-ui/u1-app/redux/reducer/themeReducer";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import ModeNightRoundedIcon from '@mui/icons-material/ModeNightRounded';
import WbSunnyRoundedIcon from '@mui/icons-material/WbSunnyRounded';
import {IconButton} from "@mui/material";


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
