import {UserType} from "../HW8";

type FiltersType = { SORT: string, CHECK: string }
type ActionPayloadType = { UP: string, DOWN: string, NUMBER: number}
type ActionType = {type: string, payload: number | string}
type SortDown = (a: UserType, b: UserType) => number;
type SortUp = (a: UserType, b: UserType) => number;

export const FILTER: FiltersType = {
  SORT: 'SORT',
  CHECK: 'CHECK',
}

export const ACTION_PAYLOAD: ActionPayloadType = {
  UP: 'UP',
  DOWN: 'DOWN',
  NUMBER: 18,
}

const sortDown: SortDown = (a, b) => {
  if (a.name < b.name) { return -1; }
  if (a.name > b.name) { return 1; }
  return 0;
}

const sortUp: SortUp = (a, b) => {
  if (a.name > b.name) { return -1; }
  if (a.name < b.name) { return 1; }
  return 0;
}

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): any => { // need to fix any
  switch (action.type && action.payload) {
    case FILTER.SORT && ACTION_PAYLOAD.DOWN: {
      return [...state.sort(sortDown)]
    }
    case FILTER.SORT && ACTION_PAYLOAD.UP: {
      return [...state.sort(sortUp)]
    }
    case FILTER.CHECK && ACTION_PAYLOAD.NUMBER: {
      return state.filter(item => item.age >= action.payload);
    }
    default:
      return state
  }
}
