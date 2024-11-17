// import React, { useState } from 'react'
import {Routes, Route} from "react-router-dom"
import Home1 from './Home1'
import Login from './Login'
import Product from './Product'
import Sports from './Sports'
import PrivareRoute from './PrivateRoute'
import ProDetail from "./ProDetail"
const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home1/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/product' element={<PrivareRoute><Product/></PrivareRoute>}/>
        <Route path='/product/details/:id' element={<ProDetail/>}/>
        <Route path='/sports' element={<Sports/>}/>
      </Routes>
    </div>
  )
}

export default AllRoutes
