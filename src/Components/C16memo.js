import React from 'react';

function C16memo() {
  return (
    <div>
        it does the same work as pure component but in the functional component. it stops  re rendering if values doesnot change . 
    </div>
  )
}

export default React.memo(C16memo)