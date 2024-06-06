import { useEffect, useState } from 'react'
import './App.css'
import Login from './pages/login/Login'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom'

import DashboardAdmin from './pages/dashboard pages/DashboardAdmin'
import Customers from './pages/customers page/Customers'
import Profile from './pages/profile page/Profile'
import Error404 from './pages/error 404 page/Error404'
import DashboardSeller from './pages/dashboard pages/DashboardSeller'

function App() {
  let data = [
    { username: 'hamidamini', password: 'hamid1234', post: 'admin' },
    { username: 'mohammadvalad', password: 'mohammad1234', post: 'seller' },
    { username: 'shervinsajadi', password: 'shervin1234', post: 'manager' },
    { username: 'behdadgolshe', password: 'behdad1234', post: 'stockClerk' }
  ]

  return (
    <div className="backgroundImage max-w-md">
      <Routes>
        <Route path='/' element={<Login data={data} />} />
        <Route path='/Customers' element={<Customers />} />
        <Route path='/Error404' element={<Error404 />} />
        <Route path='/Profile/:post' element={<Profile />} />
        <Route path='/DashboardAdmin' element={<DashboardAdmin />} />
        <Route path='/DashboardSeller' element={<DashboardSeller />} />
        <Route path="*" element={<Navigate to="/Error404" />} />
      </Routes>
    </div>
  )
}

export default App
