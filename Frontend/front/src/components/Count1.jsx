import React from 'react'
import './count1.css'

function Count1() {
    const[count,setCount]=React.useState(0);
    function increment(){
        setCount(count+1);
    }
    function decrement(){
        setCount(count-1);
    }
  return (
    <div>
      <button onClick={increment}>
        +
      </button>
      <span>{count}</span>
      <button onClick={decrement}>
        -
      </button>
    </div>
  )
}

export default Count1;
