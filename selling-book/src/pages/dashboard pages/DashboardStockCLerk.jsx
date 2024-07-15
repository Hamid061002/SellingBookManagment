import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Menu from '../../components/menu/Menu'
import Search from '../../components/search/Search'
import CustomersTable from '../../components/cutomers table/CustomersTable'
import BooksList from '../../components/books list/BooksList'

const DashboardStockCLerk = () => {
  const navigate = useNavigate()
  useEffect(() => {
    if (!Boolean(localStorage.getItem('isLoggedIn'))) {
      navigate('/')
      alert('ابتدا وارد حساب کاربری خود شوید')
    }
  }, [])

  function logOut() {
    localStorage.clear();
    navigate('/')
  }
  return (
    <section className="flex flex-col gap-10 p-5 Vazirmatn-Medium" dir="rtl">
      <div className="flex justify-between relative">
        <h2 className="text-xl text-COLOR_1 drop-shadow-md">داشبورد انبار دار</h2>
        <Menu menuList={[
          { title: "پروفایل", navigateLink: () => navigate(`/Profile/4`) },
          { title: "داشبورد", navigateLink: () => navigate('/DashboardStockClerk') },
          { title: "اضافه کردن کتاب", navigateLink: () => navigate('/AddBook/StockClerk') },
          { title: "خروج از حساب", navigateLink: logOut }
        ]} />
      </div>
      <div className="flex flex-col gap-4">
        <Search />
        <BooksList />
      </div>
    </section>
  )
}

export default DashboardStockCLerk
