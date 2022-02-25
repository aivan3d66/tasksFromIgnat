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
  const [value, onChangeOption] = useState(themeArr[0]);

  useEffect(() => {
    if (value === THEMES.LIGHT) {
      dispatch(setWhiteTheme(whiteScheme))
    } else if (value === THEMES.DARK) {
      dispatch(setDarkTheme(darkScheme))
    }
  }, [dispatch, value])

  return (
    <div style={{padding: "0 20px"}}>
      <h2>Homeworks 12</h2>
      <div>
        <div>
            <SuperSelect
              options={themeArr}
              value={value}
              onChangeOption={onChangeOption}
            />
        </div>
      </div>
    </div>
  );
}

export default HW12;
