import React from 'react'
import Menu from '../../components/menu/Menu'
import { useNavigate } from 'react-router-dom';

const RecordReport = () => {
  const navigate = useNavigate()

  function logOut() {
    localStorage.clear();
    navigate('/')
  }
  return (
    <section className="flex flex-col gap-10 p-5 Vazirmatn-Medium" dir="rtl">
      <div className="flex justify-between relative">
        <h2 className="text-xl text-COLOR_1 drop-shadow-md Vazirmatn-Medium">ثبت گزارش</h2>
        <Menu menuList={[
          { title: "پروفایل", navigateLink: () => navigate('/Profile/2') },
          { title: "داشبورد", navigateLink: () => navigate('/DashboardSeller') },
          { title: 'ثبت گزارش', navigateLink: () => '' },
          { title: "سبد فروش", navigateLink: () => navigate('/ShoppingCart') },
          { title: "خروج از حساب", navigateLink: logOut }
        ]} />
      </div>
      <form className="flex flex-col items-end gap-2">
        <div className="flex flex-col gap-5 p-5 text-COLOR_3 bg-COLOR_1 rounded-[10px] w-full">
          <div className="flex items-center gap-2 text-[10px]">
            <span className="text-sm">تاریخ: از</span>
            <input className='bg-COLOR_7 py-[2px] px-2 rounded-full outline-none' type="date" />
            <span className="text-sm">تا</span>
            <input className='bg-COLOR_7 py-[2px] px-2 rounded-full outline-none' type="date" />
          </div>
          <textarea placeholder="ثبت گزارش..." className="text-xs h-44 p-2 outline-none bg-COLOR_7 resize-none rounded-[10px]"></textarea>
        </div>
        <button className="px-8 py-2 rounded-[20px] bg-COLOR_2 text-COLOR_3 drop-shadow-md w-fit">ثبت</button>
      </form>
    </section>
  )
}

export default RecordReport
