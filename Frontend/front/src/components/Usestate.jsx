import React from 'react'
import './usestate.css'

function Usestate() {

    const change=()=>{
        alert("Button Clicked")
    }
  return (
    <div>
      <button onClick={change}>Click</button>
    </div>
  )
}

export default Usestate
