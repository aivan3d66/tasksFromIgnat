import React from 'react'
import Affair from './Affair'
import {AffairType} from './HW2'
import {FILTER_ALL, FILTER_HIGH, FILTER_LOW, FILTER_MIDDLE} from "./HW2";

type AffairsPropsType = { // need to fix any
    data: any
    setFilter: any
    deleteAffairCallback: any
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter(FILTER_ALL)} // need to fix
    const setHigh = () => {props.setFilter(FILTER_HIGH)}
    const setMiddle = () => {props.setFilter(FILTER_LOW)}
    const setLow = () => {props.setFilter(FILTER_MIDDLE)}

    return (
        <div>

            {mappedAffairs}

            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
