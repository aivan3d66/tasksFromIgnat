const SET_WHITE_THEME = 'SET_WHITE_THEME';
const SET_DARK_THEME = 'SET_DARK_THEME';

export const themeReducer = (state: any, action: any) => {
  switch (action.type) {
    case SET_WHITE_THEME: {
      return {
        ...state
      }
    }

    case SET_DARK_THEME: {
      return {
        ...state
      }
    }
  }
}

const setWhiteTheme = () => ({
  type: SET_WHITE_THEME
})
const setDarkTheme = () => ({
  type: SET_DARK_THEME
})
