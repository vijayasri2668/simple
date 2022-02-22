import React, { Component } from 'react'
import './App.css'
const inline={
  color:'white',

}
export default class Heading extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showContent : false
    }
     
    this.toggle = this.toggle.bind(this);
  }
 

  toggle (){
    this.setState ({
      showContent : !this.state.showContent
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.toggle} className='btn2'>Click To Try Class Component</button>
        {this.state.showContent ? 
        ( <h2 className='box'>This Is Created By Using Class Component --- With External Css <p style={inline}>
          This Is Done By Using Inline Css</p></h2> 
          ): null}
       
       
      </div>
    )
  }
}