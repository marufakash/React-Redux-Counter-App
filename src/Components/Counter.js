import React from "react";
import style from './counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { decrementCounter, incrementCounter, resetCounter } from "../Services/actions/CounterAction";


const Counter = () => {
    const count = useSelector(state => state.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(incrementCounter());
    }

    const handleDecrement = () => {
        dispatch(decrementCounter())
    }

    const handleReset = () => {
        dispatch(resetCounter())
    }

    return (
        <div className={style.card}>
            <h1 className={style.heading}>Counter App</h1>
            <h1 className={style.count}>{count}</h1>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleReset}>0</button>
            <button onClick={handleIncrement}>+</button>
        </div>
    )
}

export default Counter;
