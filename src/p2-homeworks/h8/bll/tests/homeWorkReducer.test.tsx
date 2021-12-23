import {ACTION_PAYLOAD, FILTER, homeWorkReducer} from '../homeWorkReducer'
import {UserType} from "../../HW8";

let initialState: Array<UserType> // need to fix any

beforeEach(() => {
  initialState = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
  ]
})

test('sort name up', () => {
  const newState = homeWorkReducer(initialState, {type: FILTER.SORT, payload: ACTION_PAYLOAD.UP})
  expect(newState).toEqual(
    [
      {_id: 0, name: 'Кот', age: 3},
      {_id: 2, name: 'Коля', age: 16},
      {_id: 5, name: 'Ирина', age: 55},
      {_id: 4, name: 'Дмитрий', age: 40},
      {_id: 3, name: 'Виктор', age: 44},
      {_id: 1, name: 'Александр', age: 66},
    ]
  )
})

test('sort name down', () => {
  const newState = homeWorkReducer(initialState, {type: FILTER.SORT, payload: ACTION_PAYLOAD.DOWN})
  expect(newState).toEqual(
    [
      {_id: 1, name: 'Александр', age: 66},
      {_id: 3, name: 'Виктор', age: 44},
      {_id: 4, name: 'Дмитрий', age: 40},
      {_id: 5, name: 'Ирина', age: 55},
      {_id: 2, name: 'Коля', age: 16},
      {_id: 0, name: 'Кот', age: 3},
    ]
  )
})

test('check age 18', () => {
  const newState = homeWorkReducer(initialState, {type: FILTER.CHECK, payload: ACTION_PAYLOAD.NUMBER})
  expect(newState).toEqual(
    [
      {_id: 1, name: 'Александр', age: 66},
      {_id: 3, name: 'Виктор', age: 44},
      {_id: 4, name: 'Дмитрий', age: 40},
      {_id: 5, name: 'Ирина', age: 55},
    ]
  )
})
