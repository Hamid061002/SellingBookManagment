import React from 'react'
import Menu from '../../components/menu/Menu'
import Search from '../../components/search input/Search'

const Dashboard = () => {
   return (
      <section className="flex flex-col gap-10 p-5" dir="rtl">
         <div className="flex justify-between relative">
            <h2 className="text-xl text-COLOR_1 drop-shadow-md Vazirmatn-Medium">داشبورد ادمین</h2>
            <Menu />
         </div>
         <div className="flex flex-col gap-4">
            <Search />
            <div className="flex">
               <label className="flex items-center gap-1 p-[10px] bg-COLOR_2 rounded-t-[20px] active:brightness-90 shadow-md overflow-hidden cursor-pointer">
                  <input className="hidden peer/radio1" type="radio" name="cutomersFilter" checked />
                  <span className="text-[10px] text-COLOR_4 Vazirmatn-Regular">لیست مشتریان</span>
                  <svg className="rotate-180 peer-checked/radio1:rotate-0" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M8.95579 4.92815L14.2891 10.2615L12.8891 11.7281L8.95579 7.79482L5.02246 11.7281L3.62246 10.2615L8.95579 4.92815Z" fill="#F8F1F1" />
                  </svg>
               </label>
               <label className="flex items-center gap-1 p-[10px] bg-COLOR_3 rounded-t-[20px] active:brightness-90 shadow-md overflow-hidden cursor-pointer">
                  <input className="hidden peer/radio2" type="radio" name="cutomersFilter" />
                  <span className="text-[10px] text-COLOR_4 Vazirmatn-Regular">تاریخچه فروش</span>
                  <svg className="rotate-180 peer-checked/radio2:rotate-0" width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path d="M8.95579 4.92815L14.2891 10.2615L12.8891 11.7281L8.95579 7.79482L5.02246 11.7281L3.62246 10.2615L8.95579 4.92815Z" fill="#F8F1F1" />
                  </svg>
               </label>
            </div>
         </div>
      </section>
   )
}

export default Dashboard
