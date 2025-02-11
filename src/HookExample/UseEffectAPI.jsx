import React from 'react'
import { useState, useEffect } from 'react'
const UseEffectAPI = () => {
    const [users, setUsers] = useState([]);
    console.log(users); //intially empty

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(res=>res.json().then(data=>{
            setUsers(data);
        }))
        .catch(err=>console.log(err))
    },[])
  return (
    <div className='parent'>
    
    {
        users.map((user, index)=>{
            return(
                <React.Fragment key={index}>
                <h1>{user.name}</h1>
                <h2>{user.email}</h2>
                </React.Fragment>
            )
        })
    }

    </div>
  )
}

export default UseEffectAPI
