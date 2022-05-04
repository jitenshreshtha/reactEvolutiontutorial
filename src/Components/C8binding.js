import React, { Component } from 'react'

export class C8binding extends Component {
    constructor(props){
        super(props)
        this.state={
            message:'Hello'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }
    clickHandler(){
        this.setState({
            message:'Thankyou'
        })
    }
  render() {
    return (
      <div>
          {this.state.message}
          {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
          {/* <button onClick={()=> this.clickHandler()}>Click</button> */}
          <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default C8binding