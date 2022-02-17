
import "../App.css";
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, resetValue } from './Redux/count/countSlice';

export default function Counter() {
  //count values from reducer 
  const count = useSelector((state) => state.count.value)
  const dispatch = useDispatch();
  const increaseCount = ()=>{
    dispatch(increment())
  }
  const decreaseCount = ()=>{
    dispatch(decrement())
  }
  const reset = ()=>{
    dispatch(resetValue())

  }
  console.log("Reducer",increment)
  return (
    <div className="counter">
        <h2>Counter</h2>
        <p>The Count is {count}</p>
        {/*Emiting actions on Click*/}
        <button onClick={increaseCount}>+</button>
        <button onClick={reset}>RESET</button>
        <button onClick={decreaseCount}>-</button>
        </div>
  )
}
