//Functional component for styling
import React from 'react'
import "./myStyles.css";
export default function FunctionalComponent(props) {
    
    let applyStyle = props.apply ? 'heading': ''
    console.log(props)
    let inlineStyle = {
        color:'red',
        fontSize: '100px'
    }

  return (
    <div>
      <h1 class={`${applyStyle} font-style`}>
        Hi there! {props.Questioning}
      </h1>
      <h2 style={inlineStyle}>Great to see you!</h2>

    </div>
  )
}
