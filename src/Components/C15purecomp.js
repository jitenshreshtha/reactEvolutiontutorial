import React, { PureComponent } from 'react'

export class C15purecomp extends PureComponent {
  render() {
    return (
      <div>
          Pure Component. 
          With pure component if there is not any changes in the state value there doesnot occur any rendering . But in regular component it re renders even if there is not any changes in state value.
      </div>
    )
  }
}

export default C15purecomp;