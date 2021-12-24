import React, {useState} from 'react'
import Affairs from './Affairs'
import s from './Affairs.module.css'

// types
export type AffairType = {
  _id: number,
  name: string,
  priority: string,
}

export type AffairPriority = {
  FILTER_ALL: string,
  FILTER_HIGH: string,
  FILTER_MIDDLE: string,
  FILTER_LOW: string
}

export type FilterType = typeof FILTERS.FILTER_ALL | AffairPriority

type DeleteAffair = (affairs: Array<AffairType>, _id: number) => Array<AffairType>;
type FilterAffairs = (affairs: Array<AffairType>, filter: FilterType) => Array<AffairType>;

// constants
const defaultAffairs: Array<AffairType> = [
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

export const FILTERS: AffairPriority = {
  FILTER_ALL: 'all',
  FILTER_HIGH: 'high',
  FILTER_MIDDLE: 'middle',
  FILTER_LOW: 'low'
}

// pure helper functions
export const filterAffairs: FilterAffairs = (affairs, filter) => {
  switch (filter) {
    case FILTERS.FILTER_ALL:
      return affairs;

    case FILTERS.FILTER_HIGH:
      return affairs.filter(a => a.priority === FILTERS.FILTER_HIGH);

    case FILTERS.FILTER_MIDDLE:
      return affairs.filter(a => a.priority === FILTERS.FILTER_MIDDLE)

    case FILTERS.FILTER_LOW:
      return affairs.filter(a => a.priority === FILTERS.FILTER_LOW)

    default:
      return affairs
  }
}

export const deleteAffair:DeleteAffair = (affairs, _id) => {
  return affairs.filter(a => a._id !== _id);
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs);
    const [filter, setFilter] = useState<FilterType>(FILTERS.FILTER_ALL);
    const filteredAffairs = filterAffairs(affairs, filter);
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id));

    return (
        <div className={s.affairsContainer}>
            <h2>Homeworks 2</h2>
            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
        </div>
    )
}

export default HW2
