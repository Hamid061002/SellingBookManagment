import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const DashboardSeller = () => {
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
    <section className="flex flex-col gap-10 p-5" dir="rtl">
      <div className="flex justify-between relative">
        <h2 className="text-xl text-COLOR_1 drop-shadow-md Vazirmatn-Medium">داشبورد فروشنده</h2>
        <Menu menuList={[{ title: "پروفایل", navigateLink: () => navigate(`/Profile/Seller`) }, { title: "داشبورد", navigateLink: () => navigate('/DashboardSeller') }, { title: 'ثبت گزارش', navigateLink }, { title: "مدیریت کاربران", navigateLink: () => navigate('/Customers') }, { title: "خروج از حساب", navigateLink: logOut }]} />
      </div>
      <div className="flex flex-col gap-4">
        <Search />
        <CustomersTable />
      </div>
    </section>
  )
}

export default DashboardSeller
