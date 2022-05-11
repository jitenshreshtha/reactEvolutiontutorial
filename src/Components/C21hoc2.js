import React, { Component } from 'react'

export class C21hoc2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    incrementCount = () =>{
        this.setState(prevState =>{
            return{count:prevState.count+1}
        })
    }
  render() {
    return (
      <div>
          <h2 onMouseOver={this.incrementCount}>Hovered {this.state.count} times</h2>
      </div>
    )
  }
}

export default C21hoc2