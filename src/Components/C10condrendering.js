import React, { Component } from 'react'

 class C10condrendering extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          isLoggedIn: true
       }
     }
  render() {
      if(this.state.isLoggedIn){
          return(
              <div>Welcome Jiten</div>
          )
      }
      else{
          return(<div>Welcome Guest</div>)
      }
  }
}

export default C10condrendering