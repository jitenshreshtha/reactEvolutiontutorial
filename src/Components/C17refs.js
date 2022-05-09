import React, { Component } from 'react'

export class C17refs extends Component {
    constructor(props) {
      super(props)
        this.inputRef = React.createRef()
    }
    componentDidMount(){
        this.inputRef.current.focus()
        
    }
    clickHandler = () =>{
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
          access DOM nodes directly.
          fetches input values.
          <input type="text" ref={this.inputRef}/>
          <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default C17refs