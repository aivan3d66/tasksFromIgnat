export type InitialState = {isLoading: boolean};
export type ActionObj = {IS_LOADING: string, STOP_LOADING: string};
export type ActionReducer = {type: string}
export type LoadingAC = () => ActionReducer;
export type LoadingStopAC = () => ActionReducer;

}

export const loadingReducer = (state = initState, action: any): any => { // fix any
    switch (action.type) {
        case '': {
            return state
        }
        default: return state
    }
}

export const loadingAC = (): any => {} // fix any