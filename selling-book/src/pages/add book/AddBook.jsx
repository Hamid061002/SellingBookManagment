import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Menu from '../../components/menu/Menu'

const AddBook = () => {
  const params = useParams()

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
        <h2 className="text-xl text-COLOR_1 drop-shadow-md Vazirmatn-Medium">اضافه کردن کتاب</h2>
        {
          params.post == 'Manager' &&
          <Menu menuList={[
            { title: "پروفایل", navigateLink: () => navigate(`/Profile/Manager`) },
            { title: "داشبورد", navigateLink: () => navigate('/DashboardManager') },
            { title: "اضافه کردن کتاب", navigateLink: () => '' },
            { title: "گزارشات", navigateLink: () => navigate('/Reports') },
            { title: "خروج از حساب", navigateLink: logOut }]} />
        }
        {
          params.post == 'StockClerk' &&
          <Menu menuList={[
            { title: "پروفایل", navigateLink: () => navigate(`/Profile/StockClerk`) },
            { title: "داشبورد", navigateLink: () => navigate('/DashboardStockClerk') },
            { title: "اضافه کردن کتاب", navigateLink: () => '' },
            { title: "گزارشات", navigateLink: () => navigate('/Reports') },
            { title: "خروج از حساب", navigateLink: logOut }]} />
        }
      </div>
      <div className='flex justify-center'>
        <form className="flex flex-col items-end gap-2" onSubmit={handleSubmit} >
          <div className="flex flex-col gap-4 text-COLOR_3 bg-COLOR_1 px-8 py-4 pb-7 rounded-[20px] shadow">
            <div className="flex items-center justify-start gap-5">
              <figure className="rounded-full">
                <img className="w-[88px] h-[108px] " src="" alt="" />
              </figure>
              <label className="flex flex-col gap-2 items-center" htmlFor="file">
                <div className="text-COLOR_3">انتخاب کاور کتاب</div>
                <div className="bg-COLOR_4 px-3 py-1 rounded-md">choose file</div>
                <input
                  accept='.jpg, .jpeg, .png'
                  className='hidden'
                  id="file"
                  type="file"
                  onChange={e => console.log(e)} />
              </label>
            </div>
            <div className="flex justify-between items-center gap-6">
              <label htmlFor="">اسم کتاب</label>
              <input
                className="w-[157px] bg-COLOR_4 rounded-lg py-2 px-2 text-xs outline-none"
                type="text"
                placeholder='کتاب'
              />
            </div>
            <div className="flex justify-between items-center gap-6">
              <label htmlFor="">نام نویسنده</label>
              <input
                className="w-[157px] bg-COLOR_4 rounded-lg py-2 px-2 text-xs outline-none"
                type="text"
                placeholder='نام نویسنده'
              />
            </div>
            <div className="flex justify-between items-center gap-6">
              <label htmlFor="">ژانر</label>
              <input
                className="w-[157px] bg-COLOR_4 rounded-lg py-2 px-2 text-xs outline-none"
                type="text"
                placeholder='درام'
              />
            </div>
            <div className="flex justify-between items-center gap-6">
              <label htmlFor="">تعداد</label>
              <input
                className="w-[157px] bg-COLOR_4 rounded-lg py-2 px-2 text-xs outline-none"
                type="number"
                placeholder='2'
              />
            </div>
          </div>
          <button className="px-8 py-2 rounded-[20px] bg-COLOR_2 text-COLOR_3 drop-shadow-md">ثبت</button>
        </form>
      </div>
    </section>
  )
}

export default AddBook
