import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css';
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type AffairPropsType = {
  affair:  AffairType,
  deleteAffairCallback: (_id: number) => void,
}

function Affair(props: AffairPropsType) {
  const deleteCallback = () => {
    props.deleteAffairCallback(props.affair._id)
  }

  return (
    <div className={s.affairsList}>
      <div className={s.affairsList__name}>
        {props.affair.name}
      </div>

      <div className={s.affairsList__priority}>
        {props.affair.priority}
      </div>
      <SuperButton onClick={deleteCallback} className={s.affairsList__btn}>
        X
      </SuperButton>
    </div>
  )
}

export default Affair
