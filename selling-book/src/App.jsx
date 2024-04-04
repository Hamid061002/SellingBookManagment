import { useState } from 'react'
import './App.css'
import Login from './pages/login/Login'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/dashboard admin/Dashboard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="backgroundImage max-w-md">      
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/Dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App
