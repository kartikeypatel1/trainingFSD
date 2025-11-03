import React from 'react'
import './usestate.css'

function Usestate() {

    const change=()=>{
       for(let i=0;i<5;i++){
        document.write(i);
       }

    }
  return (
    <div>
      <button onClick={change}>Click</button>
    </div>
  )
}

export default Usestate
