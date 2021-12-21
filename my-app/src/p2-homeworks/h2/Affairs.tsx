import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import {FILTER_ALL, FILTER_HIGH, FILTER_LOW, FILTER_MIDDLE} from "./HW2";
import s from './Affairs.module.css';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairsPropsType = { // need to fix any
  data: Array<AffairType>
  setFilter: (filter: FilterType) => void,
  deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
  const mappedAffairs = props.data.map((a: AffairType) => (
    <Affair // should work
      key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
      affair={a}
      deleteAffairCallback={props.deleteAffairCallback}
    />
  ))

  const setAll = () => {
    props.setFilter(FILTER_ALL)
  } // need to fix
  const setHigh = () => {
    props.setFilter(FILTER_HIGH)
  }
  const setMiddle = () => {
    props.setFilter(FILTER_MIDDLE)
  }
  const setLow = () => {
    props.setFilter(FILTER_LOW)
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
