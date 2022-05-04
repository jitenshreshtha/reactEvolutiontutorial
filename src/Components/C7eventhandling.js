import React from 'react'

function C7eventhandling() {
    function clickHandler(){
        alert('button clicked')
    }
  return (
    <div>
        <button onClick={clickHandler}>Clicks</button>
    </div>
  )
}

export default C7eventhandling;