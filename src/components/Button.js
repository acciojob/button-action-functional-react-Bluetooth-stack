import React, { useState } from 'react'

function Button() {
    let [clicked, setClicked] = useState(false)
  return (
    <div>
        <button id='click' onClick={()=>{setClicked(true)}}>click</button>
        {
            clicked&&
            <p id='para'>Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
        }
    </div>
  )
}

export default Button