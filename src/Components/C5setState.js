import React, { Component } from 'react'

export class C5setState extends Component {
    constructor(){
        super()
        this.state ={
            count : 0
        }
    }
    increment(){
        this.setState({
            count:this.state.count+1
        })
    }
  render() {
    return (
      <div>
        count - {this.state.count}<br />
        <button onClick={()=> this.increment()}>Increment</button>
      </div>
    )
  }
}

export default C5setState
