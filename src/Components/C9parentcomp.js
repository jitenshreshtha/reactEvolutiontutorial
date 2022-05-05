import React, { Component } from 'react'
import C9childcomp from './C9childcomp'

export class C9parentcomp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentName:'Parent'
      }
      this.greatParent = this.greatParent.bind(this)
    }
    greatParent(childName){
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
  render() {
    return (
      <div>
          <C9childcomp greatHandler={this.greatParent}/>
      </div>
    )
  }
}

export default C9parentcomp