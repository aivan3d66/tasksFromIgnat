import React from 'react'
import Affair from './Affair'
import {AffairType, FILTERS, FilterType} from './HW2'
import s from './Affairs.module.css';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = {
  data: Array<AffairType>
  setFilter: (filter: FilterType) => void,
  deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((a: AffairType) => (
    <Affair
      key={a._id}
      affair={a}
      deleteAffairCallback={props.deleteAffairCallback}
    />
  ))

  const setAll = () => {
    props.setFilter(FILTERS.FILTER_ALL)
  }
  const setHigh = () => {
    props.setFilter(FILTERS.FILTER_HIGH)
  }
  const setMiddle = () => {
    props.setFilter(FILTERS.FILTER_MIDDLE)
  }
  const setLow = () => {
    props.setFilter(FILTERS.FILTER_LOW)
  }

  return (
    <div className={s.affairs__wrapper}>
      {mappedAffairs}
      <div className={s.affairs__wrapperBtn}>
        <SuperButton onClick={setAll}>
          All
        </SuperButton>
        <SuperButton onClick={setHigh}>
          High
        </SuperButton>
        <SuperButton onClick={setMiddle}>
          Middle
        </SuperButton>
        <SuperButton onClick={setLow}>
          Low
        </SuperButton>
      </div>
    </div>
  )
}

export default Affairs
