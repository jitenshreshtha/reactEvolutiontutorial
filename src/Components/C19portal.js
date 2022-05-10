import React from 'react';
import  ReactDOM from 'react-dom';

function C19portal() {
  return ReactDOM.createPortal(
    <h1>Portal Tutorials</h1>
  ,document.getElementById('portal-root'))
}

export default C19portal;