import React, {useState} from 'react'
import Affairs from './Affairs'

// types
export type AffairPriorityType = typeof FILTER_HIGH | typeof FILTER_MIDDLE | typeof FILTER_LOW; // need to fix any
export type AffairType = {
  _id: number,
  name: string,
  priority: string,
}
export type FilterType = typeof FILTER_ALL | AffairPriorityType

type DeleteAffair = (affairs: Array<AffairType>, _id: number) => Array<AffairType>;
type FilterAffairs = (affairs: Array<AffairType>, filter: AffairPriorityType) => Array<AffairType>;

// constants
const defaultAffairs: any = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

export const FILTER_ALL: string = "all";
export const FILTER_HIGH: string = "high";
export const FILTER_MIDDLE: string = "middle";
export const FILTER_LOW: string = "low";

// pure helper functions
export const filterAffairs: FilterAffairs = (affairs, filter) => { // need to fix any
  switch (filter) {
    case FILTER_ALL:
      return affairs;

    case FILTER_HIGH:
      return affairs.filter(a => a.priority === FILTER_HIGH);

    case FILTER_MIDDLE:
      return affairs.filter(a => a.priority === FILTER_MIDDLE)

    case FILTER_LOW:
      return affairs.filter(a => a.priority === FILTER_LOW)

    default:
      return affairs
  }
}

export const deleteAffair:DeleteAffair = (affairs, _id) => { // need to fix any
  return affairs.filter(a => a._id !== _id);
}

function HW2() {
    const [affairs, setAffairs] = useState<Array<AffairType>>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>(FILTER_ALL)
    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id: number) => setAffairs(deleteAffair(affairs, _id)) // need to fix any

    return (
        <div>
            <hr/>
            homeworks 2

            {/*should work (должно работать)*/}
            <Affairs
                data={filteredAffairs}
                setFilter={setFilter}
                deleteAffairCallback={deleteAffairCallback}
            />

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
