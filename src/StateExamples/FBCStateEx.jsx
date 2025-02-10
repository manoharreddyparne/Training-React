import React from 'react'
import { useState } from 'react'
const FBCStateEx = () => {

    // let state = useState(0);
    const [state, setState] =useState(0);

    let Increment =()=>{
      setState(state + 1);
    }
    let Decrement =()=>{
      setState(state -1);
    }
    let reset =()=>{
      setState(0);
    }
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default FBCStateEx
