import React, { Component } from 'react'

class C4State extends Component {
    constructor(){
        super()
        this.state={
            message : 'Welcome Guys'
        }
    }
    changeMessage(){
        this.setState({
            message : 'Thankyou'
        })
        }
    
  render() {
    return (
      <div>{this.state.message}<br />
        <button onClick={()=>this.changeMessage()}>Click</button>
      </div>
    )
  }
}

export default C4State