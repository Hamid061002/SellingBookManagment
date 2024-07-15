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
import CustomerInfo from './pages/customer info/CustomerInfo'
import BookInfo from './pages/book info/BookInfo'
import SignUp from './pages/sign up/SignUp'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://66640b00932baf9032a9c41b.mockapi.io/users')
      .then(res => res.json())
      .then(usersData => setUsers([...usersData]))
      .catch(error => alert(error))

  }, [])

  return (
    <div className="backgroundImage max-w-md">
      <Routes>
        <Route path='/SignUp' element={<SignUp data={users} />} />
        <Route path='/Login' element={<Login data={users} />} />
        <Route path='/' element={<Login data={users} />} />
        <Route path='/BookInfo/:bookId' element={<BookInfo />} />
        <Route path='/CustomerInfo' element={<CustomerInfo />} />
        <Route path='/ShoppingCart' element={<ShoppingCart />} />
        <Route path='/AddBook/:post' element={<AddBook />} />
        <Route path='/Reports' element={<Reports />} />
        <Route path='/RecordReport' element={<RecordReport />} />
        <Route path='/DashboardStockCLerk' element={<DashboardStockCLerk />} />
        <Route path='/DashboardManager' element={<DashboardManager />} />
        <Route path='/DashboardAdmin' element={<DashboardAdmin />} />
        <Route path='/DashboardSeller' element={<DashboardSeller />} />
        <Route path='/Profile/:id' element={<Profile />} />
        <Route path='/Error404' element={<Error404 />} />
        <Route path="*" element={<Navigate to="/Error404" />} />
      </Routes>
    </div>
  )
}

export default App
