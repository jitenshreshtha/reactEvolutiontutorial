import React from 'react'

function C9childcomp(props) {
  return (
    <div><button onClick={()=>props.greatHandler('child')} >GreatParent</button></div>
  )
}

export default C9childcomp