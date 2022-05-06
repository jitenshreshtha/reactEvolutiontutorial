import React from 'react';
import './C12stylesheet.css';

function C12stylesheet() {
    const heading ={
        color : 'blue'
    }
  return (
    <div>
        <h1 className='primary'>This is external css.</h1>
        <h2 style={heading}>This is inline css.</h2>
    </div>
  )
}

export default C12stylesheet;