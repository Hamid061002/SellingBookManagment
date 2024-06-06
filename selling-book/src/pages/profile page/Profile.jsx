import React, { useEffect, useState } from 'react'
import Menu from '../../components/menu/Menu'
import { useNavigate } from 'react-router-dom';

const Profile = () => {
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

  function handleSubmit(event) {
    event.preventDefault()
    console.log(srcPhoto);
  }

  let [srcPhoto, setSrcPhoto] = useState('')
  return (
    <section className="flex flex-col gap-10 p-5 Vazirmatn-Medium" dir="rtl">
      <div className="flex justify-between relative">
        <h2 className="text-xl text-COLOR_1 drop-shadow-md Vazirmatn-Medium">پروفایل ادمین</h2>
        <Menu menuList={[{ title: "پروفایل", navigateLink: '' }, { title: "داشبورد", navigateLink: () => navigate('/DashboardAdmin') }, { title: "مدیریت کاربران", navigateLink: () => navigate('/Customers') }, { title: "خروج از حساب", navigateLink: logOut }]} />
      </div>
      <div className='flex justify-center'>
        <form className="flex flex-col items-end gap-2" onSubmit={handleSubmit} >
          <div className="flex flex-col gap-4 text-COLOR_3 bg-COLOR_1 px-8 py-4 rounded-[20px] shadow">
            <div className="flex items-center justify-center gap-5">
              <figure className="rounded-full">
                <img className="size-[120px] " src="" alt="" />
              </figure>
              <label className="flex flex-col gap-2 items-center" htmlFor="file">
                <div className="text-COLOR_3">انتخاب عکس</div>
                <div className="bg-COLOR_4 px-3 py-1 rounded-md">choose file</div>
                <input
                  accept='.jpg, .jpeg, .png'
                  className='hidden'
                  id="file"
                  type="file"
                  onChange={e => console.log(e)} />
              </label>
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="">نام</label>
              <input
                className="w-[157px] bg-COLOR_4 rounded-lg py-2 px-2 text-xs outline-none"
                type="text"
                placeholder='حمید'
                value={''} />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="">امینی</label>
              <input
                className="w-[157px] bg-COLOR_4 rounded-lg py-2 px-2 text-xs outline-none"
                type="text"
                placeholder='نام خانوادگی'
                value={''} />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="">ایمیل</label>
              <input
                className="w-[157px] bg-COLOR_4 rounded-lg py-2 px-2 text-xs outline-none"
                type="text"
                placeholder='email@gmail.com'
                value={''} />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="">شماره تلفن</label>
              <input
                className="w-[157px] bg-COLOR_4 rounded-lg py-2 px-2 text-xs outline-none"
                type="text"
                placeholder='091234567891'
                value={''} />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="">سمت</label>
              <select className="w-[157px] bg-COLOR_4 rounded-lg py-2 px-2 text-xs" name="" id="">
                <option value="" >انبار دار</option>
                <option value="" selected>ادمین</option>
                <option value="">فروشنده</option>
                <option value="">مدیر</option>
              </select>
            </div>
          </div>
          <button className="px-8 py-2 rounded-[20px] bg-COLOR_2 text-COLOR_3 drop-shadow-md">ثبت</button>
        </form>
      </div>
    </section>
  )
}

export default Profile
