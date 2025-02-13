import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar'
import Dashboard from "./Pages/Dashboard";
import Store from "./Pages/Store";
import Calender from "./Pages/Calender";
import Blog from "./Pages/Blog";
import News from "./Pages/News";
import MyAccount from "./Pages/MyAccount";
import MySettings from "./Pages/MySettings";
import Profile from "./Pages/Profile";
import PageNotFound from "./Pages/PageNotFound";
import Assessments from './Pages/Assessments';
import Classroom from "./Pages/Classroom"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/classroom" element={<Classroom />} />
        <Route path='/assessments' element={Assessments} />
        <Route path="/store" element={<Store />} />
        <Route path="/calender" element={<Calender />} />
        <Route path="/news" element={<News />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/profile" element={<Profile />}>
          <Route path="myaccount" element={<MyAccount />} />
          <Route path="mysettings" element={<MySettings />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
