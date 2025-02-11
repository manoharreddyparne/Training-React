//form handling in controlled component
import './FormHandling.css'
import React, { Component } from 'react'

export default class FormHandling extends Component {
    constructor(props){
        super(props);
        this.state ={
            textVal:'',
            skillVal:''
        }
    }
    ChangeVal = (event)=>{
        this.setState({
            textVal:event.target.value
        })
    }
    ChangeSkill = (event)=>{
        this.setState({
            skillVal:event.target.value
        })
    }
    Submitted = (event) =>{
        alert("Submitted"  `
            ${this.textVal} and ${this.skillVal}`)
        event.preventDefault();
            
    }
  render() {
    return (
      <div>

        <form onSubmit={this.Submitted}>
            <label >Name: </label>
            <input type="text" placeholder='Enter you name' onChange={this.ChangeVal} />
            <br />
            <label >Skill</label>
            <select onChange={this.ChangeSkill}>
                <option >React</option>
                <option>Angluar</option>
                <option >Others</option>

            </select>
            <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}


