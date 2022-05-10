// A class component that implements either one or both of the lifecycle methods getDerivedStateFromError or componentDidCatch becomes an error boundary.

// The static method getDerivedStateFromError method is used to render a fallback UI after an error is thrown and the componentDidCatch method is used to log the error information.

import React from 'react';

function C20errorhandling({heroName}) {
    if(heroName === 'joker'){
        throw new Error('Not a Hero!')
    }
  return (
    <div>{heroName}</div>
  )
}

export default C20errorhandling