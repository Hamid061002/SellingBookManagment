import { useState } from 'react'
import './App.css'
import Login from './pages/login/Login'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom'

import Dashboard from './pages/dashboard admin/Dashboard'

function App() {
  return (
    <div className="backgroundImage max-w-md">
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  )
}

export default App
