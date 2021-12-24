import React from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import Preloader from "./Preloader";

const s = require('./HW10.module.css');

type HW10props = {
  loading: () => void,
  loadingStop: () => void,
  isLoading: boolean,
}

const HW10 = (props: HW10props) => {
  const setLoading = () => {
    props.loading();
    setTimeout(props.loadingStop, 2000);
  };

  return (
    <div className={s.contentWrapper}>
      <h2>Homeworks 10</h2>
      {props.isLoading
        ? (
          <Preloader/>
        ) : (
          <div>
            <SuperButton onClick={setLoading}>set loading...</SuperButton>
          </div>
        )
      }
      {/*для личного творчества, могу проверить*/}
      {/*<Alternative/>*/}
    </div>
  )
}

export default HW10
