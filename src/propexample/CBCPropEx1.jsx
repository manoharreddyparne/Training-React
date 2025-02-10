import React, { Component } from 'react';

export default class CBCPropEx1 extends Component {
  render() {
    console.log(this);
    return (
      <div>
        <h1>{this.props.username}</h1>
        <h2>{this.props.age}</h2>
        {
            this.props.hob.map(hobby=>{
                return <li>{hobby}</li>
            })
        }
        {this.props.isGood ? <h1>Good</h1> : <h1>Bad</h1>}

        <button onClick={this.props.sendFun}>Click here</button>
      </div>
    )
  }
}
