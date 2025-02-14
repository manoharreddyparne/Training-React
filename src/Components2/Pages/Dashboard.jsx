import React from 'react'
import { useState } from 'react'
const Dashboard = () => {
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");

  return (
    <div className='Signupform'>
      <form action="">
      <input type="text" name='username' placeholder='Enter Username'/>
      <br />
      <input type="email" name='email' placeholder='Enter Email'/>
      <br />
      <input type="Password" name='Password' placeholder='Enter Password' />
      <br />
      <label >Male</label>
      <input type="radio" name='male'/>
      <label >Female</label>
      <input type="radio" name='female' />
      <br />
      <textarea name="" id="address" cols={30} rows={5}></textarea>
      <br />
      <select name="Country" id="DropDown">
        <option value="india">India</option>
        <option value="china">China</option>
        <option value="usa">USA</option>
      </select>
      <br />
      <button type='submit'>Signup</button>
      </form>
    </div>
  )
}

export default Dashboard
