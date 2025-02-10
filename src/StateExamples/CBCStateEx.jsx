//state example along with contructor and button
import React, { Component } from 'react'
export default class CBCStateEx extends Component {
    constructor(){
        super();
        this.state ={
            university:"MRU"
        };
    }
    changeName=()=>{
        this.setState({university:"Mallareddy University"});
    }
  render() {
    console.log(this)
    return (
      <div>CBCStateEx
        <h1>{this.state.university}</h1>
        <button onClick={this.changeName}>Click here</button>
      </div>
    )
  }
}
