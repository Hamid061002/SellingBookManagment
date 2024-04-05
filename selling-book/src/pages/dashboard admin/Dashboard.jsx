import React, { useEffect } from 'react'
import Menu from '../../components/menu/Menu'
import Search from '../../components/search/Search'
import CustomersTable from '../../components/cutomers table/CustomersTable'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
   const navigate = useNavigate()
   useEffect(() => {      
      if (!localStorage.getItem('isLoggedIn')) {
         navigate('/')
      }
   }, [])
   return (
      <section className="flex flex-col gap-10 p-5" dir="rtl">
         <div className="flex justify-between relative">
            <h2 className="text-xl text-COLOR_1 drop-shadow-md Vazirmatn-Medium">داشبورد ادمین</h2>
            <Menu />
         </div>
         <div className="flex flex-col gap-4">
            <Search />
            <CustomersTable />
         </div>
      </section>
   )
}

export default Dashboard
