import React from 'react'
import {AffairType} from "./HW2";
import s from './Affairs.module.css';
import {IconButton} from '@mui/material';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

type AffairPropsType = {
  affair: AffairType,
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
      <IconButton onClick={deleteCallback}>
        <DeleteRoundedIcon/>
      </IconButton>
    </div>
  )
}

export default Affair
