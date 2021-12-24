export type InitialState = {isLoading: boolean};
export type ActionObj = {IS_LOADING: string, STOP_LOADING: string};
export type ActionReducer = {type: string}
export type LoadingAC = () => ActionReducer;
export type LoadingStopAC = () => ActionReducer;

const ACTION: ActionObj = {
  IS_LOADING: "IS-LOADING",
  STOP_LOADING: "STOP_LOADING"
}

const initState: InitialState = {
  isLoading: false,
}

export const loadingReducer = (state = initState, action: ActionReducer): InitialState => {
  switch (action.type) {
    case ACTION.IS_LOADING: {
      return {...state, isLoading: true}
    }
    case ACTION.STOP_LOADING: {
      return {...state, isLoading: false}
    }
    default:
      return state
  }
}

export const loadingAC: LoadingAC = () => ({type: ACTION.IS_LOADING});
export const loadingStopAC: LoadingStopAC = () => ({type: ACTION.STOP_LOADING});
