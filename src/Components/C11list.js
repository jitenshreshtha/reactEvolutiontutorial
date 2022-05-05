import React from 'react'

const C11list = () => {
    const names = ['Jiten','Suchin','Sundar'];
    const nameList = names.map((name) => <h2>{name}</h2>)
  return (
    <div>
        {nameList}
    </div>
  )
}

export default C11list