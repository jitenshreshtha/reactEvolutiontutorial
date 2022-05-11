import React, { Component } from 'react'
import { UserConsumer } from './C24Context';

export class C24contextF extends Component {
  render() {
    return (
      <div>
          <UserConsumer>
              {
                  (userName)=>{
                    return <div>Hello {userName}</div>
                  }
              }
          </UserConsumer>
      </div>
    )
  }
}

export default C24contextF;