//using useEffect(changing the title and setCount)--> useEffectEx.jsx
import React,{useState,useEffect} from 'react'

const UseEffectEx = () => {
    const[count, setCount] = useState(0);
    useEffect (()=>{
        setTimeout(()=>{
            setCount(100);
        }, 5000)
        document.title = count;
    },[count])
  return (
    <div>
      
    </div>
  )
}

export default UseEffectEx
