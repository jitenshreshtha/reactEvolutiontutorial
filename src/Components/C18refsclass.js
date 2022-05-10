import React, { Component } from 'react'

export class C18refsclass extends Component {
    constructor(props) {
      super(props)
    this.inputRef = React.createRef()
    }
    focusInput(){
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
          <input type="text"/>
      </div>
    )
  }
}

export default C18refsclass