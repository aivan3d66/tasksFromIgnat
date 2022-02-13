const SET_WHITE_THEME = 'SET_WHITE_THEME';
const SET_DARK_THEME = 'SET_DARK_THEME';

export const whiteScheme = {
  headerColour: 'rgba(65, 105, 225, 1)',
  appBackgroundColour: 'rgba(220, 220, 220, 0.5)',
  textColour: 'black'
}
export const darkScheme = {
  headerColour: 'rgba(44, 51, 59, 1)',
  appBackgroundColour: 'rgba(34, 39, 45, 1)',
  textColour: 'rgba(147, 167, 218, 1)',
}

const initialState = {
  scheme: whiteScheme
}

export const themeReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SET_WHITE_THEME: {
      return {
        ...state,
        scheme: action.payload
      }
    }

    case SET_DARK_THEME: {
      return {
        ...state,
        scheme: action.payload
      }
    }

    default: {
      return state;
    }
  }
}

export const setWhiteTheme = (whiteScheme: any) => ({
  type: SET_WHITE_THEME,
  payload: whiteScheme
})
export const setDarkTheme = (darkScheme: any) => ({
  type: SET_DARK_THEME,
  payload: darkScheme
})
