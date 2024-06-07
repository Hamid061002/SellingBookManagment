import { useEffect, useState } from 'react'
import './App.css'
import Login from './pages/login/Login'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom'

import DashboardAdmin from './pages/dashboard pages/DashboardAdmin'
import Profile from './pages/profile page/Profile'
import Error404 from './pages/error 404 page/Error404'
import DashboardSeller from './pages/dashboard pages/DashboardSeller'
import RecordReport from './pages/record report/RecordReport'
import DashboardManager from './pages/dashboard pages/DashboardManager'
import DashboardStockCLerk from './pages/dashboard pages/DashboardStockCLerk'
import Reports from './pages/Reports/Reports'
import AddBook from './pages/add book/AddBook'
import ShoppingCart from './pages/shopping cart/ShoppingCart'

function App() {
  let data = [
    { username: 'hamidamini', password: 'hamid1234', post: 'Admin', title: 'ادمین' },
    { username: 'mohammadvalad', password: 'mohammad1234', post: 'Seller', title: 'فروشنده' },
    { username: 'shervinsajadi', password: 'shervin1234', post: 'Manager', title: 'مدیر' },
    { username: 'behdadgolshe', password: 'behdad1234', post: 'StockClerk', title: 'انبار دار' }
  ]

  return (
    <div className="backgroundImage max-w-md">
      <Routes>
        <Route path='/' element={<Login data={data} />} />
        <Route path='/ShoppingCart' element={<ShoppingCart />} />
        <Route path='/AddBook:post' element={<AddBook />} />
        <Route path='/Reports' element={<Reports />} />
        <Route path='/RecordReport' element={<RecordReport />} />
        <Route path='/DashboardStockCLerk' element={<DashboardStockCLerk />} />
        <Route path='/DashboardManager' element={<DashboardManager />} />
        <Route path='/DashboardAdmin' element={<DashboardAdmin />} />
        <Route path='/DashboardSeller' element={<DashboardSeller />} />
        <Route path='/Profile/:post' element={<Profile data={data} />} />
        <Route path='/Error404' element={<Error404 />} />
        <Route path="*" element={<Navigate to="/Error404" />} />
      </Routes>
    </div>
  )
}

export default App
