import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Menu from '../../components/menu/Menu'
import Search from '../../components/search/Search'
import CustomersTable from '../../components/cutomers table/CustomersTable'
import SearchResult from '../../components/search result/SearchResult'

const DashboardSeller = () => {
  const navigate = useNavigate()
  let [showSearchResult, setShowSearchResult] = useState(false)

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
        <Menu menuList={[
          { title: "پروفایل", navigateLink: () => navigate(`/Profile/2`) },
          { title: "داشبورد", navigateLink: () => navigate('/DashboardSeller') },
          { title: 'ثبت گزارش', navigateLink: () => navigate('/RecordReport') },
          { title: "سبد فروش", navigateLink: () => navigate('/ShoppingCart') },
          { title: "خروج از حساب", navigateLink: logOut }
        ]} />
      </div>
      <div className="flex flex-col gap-4">
        <Search />
        {
          !showSearchResult && <CustomersTable />
        }
        {
          showSearchResult && <SearchResult />
        }

      </div>
    </section>
  )
}

export default DashboardSeller
