import React from 'react'
import { Link,Outlet } from 'react-router-dom';
const Profile = () => {
  return (
    <div>
        Profile
        <hr />
        <br />
        <br />
      <Link to='/profile/myaccount'>My Account </Link>
      <Link to='/profile/mysettings'>My Settings</Link>
      
      <Outlet />
    </div>
  )
}

export default Profile
