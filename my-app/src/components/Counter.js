import React ,{useState} from 'react';
import "../App.css";

export default function Counter() {
    const [count,updateCount] = useState(100)
  return (
    <div className="counter">
        <h2>Counter</h2>
        <p>The Count is {count}</p>
        <button onClick={()=>{updateCount(count + 1)}}>+</button>
        <button onClick={()=>{updateCount(count - 1)}}>-</button>
        </div>
  )
}
