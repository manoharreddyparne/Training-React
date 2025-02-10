//creating a propchild with two h1 tags(props)
import React from 'react'

const PropChildrenex = (props) => {
    console.log(props)
  return (
    <div>
      <h1>{props.username}</h1>
      <h2>{props.company}</h2>
      {
        props.children
      }
    </div>
  )
}

export default PropChildrenex
