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
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>крутилка...</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
