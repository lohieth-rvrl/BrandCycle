import React from 'react'
import Admindash from './Components/Admin/Admindash';
import AllProducts from './Components/Customer/AllProducts';
import Login from './Components/Auth/Login';
import Signup from './Components/Auth/Signup';


export default function App() {
  return (
    <div>
      <Admindash/>
      <Login/>
      <Signup/>
      <AllProducts/>
    </div>
  )
}
