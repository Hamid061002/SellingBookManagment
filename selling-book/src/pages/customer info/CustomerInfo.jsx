import React, { useEffect } from 'react'
import Menu from '../../components/menu/Menu'
import { useNavigate } from 'react-router-dom'

const CustomerInfo = () => {
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
    <section className="flex flex-col gap-5 p-5 Vazirmatn-Medium" dir="rtl">
      <div className="flex justify-between relative">
        <h2 className="text-xl text-COLOR_1 drop-shadow-md">اطلاعات مشتری</h2>
      </div>
      <div className="flex flex-col h-[600px] rounded-[20px] bg-COLOR_4 text-COLOR_3">
        <div className="flex gap-5 p-5">
          <div className='w-24'>
            <div className="flex justify-between">
              <span className="whitespace-nowrap">نام</span>
              <span>:</span>
            </div>
            <div className="flex justify-between">
              <span className="whitespace-nowrap">نام خانوادگی</span>
              <span>:</span>
            </div>
            <div className="flex justify-between">
              <span className="whitespace-nowrap">ایمیل</span>
              <span>:</span>
            </div>
            <div className="flex justify-between">
              <span className="whitespace-nowrap">شماره تلفن</span>
              <span>:</span>
            </div>
            <div className="flex justify-between">
              <span className="whitespace-nowrap">کد ملی</span>
              <span>:</span>
            </div>
            <div className="flex justify-between">
              <span className="whitespace-nowrap">ID</span>
              <span>:</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span>حمید</span>
            <span>امینی</span>
            <span>email@gmail.com</span>
            <span>09123456789</span>
            <span>123456789</span>
            <span>3231</span>
          </div>
        </div>
        <div className="flex flex-col gap-2 border-t-2 border-COLOR_3 py-3 px-5">
          <h2 className="Vazirmatn-SemiBold">تاریخچه خرید مشتری</h2>
          <table>
            <tr>
              <th className="text-xs py-1 px-2 text-center">اسم کتاب</th>
              <th className="text-xs py-1 px-2 text-center">کد کتاب</th>
              <th className="text-xs py-1 px-2 text-center">قیمت</th>
              <th className="text-xs py-1 px-2 text-center">تاریخ فروش</th>
              <th className="text-xs py-1 px-2 text-center">تعداد</th>
            </tr>
            <tr>
              <td className="text-xs py-1 px-2 text-center">عنوان</td>
              <td className="text-xs py-1 px-2 text-center">231</td>
              <td className="text-xs py-1 px-2 text-center">100ت</td>
              <td className="text-xs py-1 px-2 text-center">تاریخ</td>
              <td className="text-xs py-1 px-2 text-center">2</td>
            </tr>
            <tr>
              <td className="text-xs py-1 px-2 text-center">عنوان</td>
              <td className="text-xs py-1 px-2 text-center">231</td>
              <td className="text-xs py-1 px-2 text-center">100ت</td>
              <td className="text-xs py-1 px-2 text-center">تاریخ</td>
              <td className="text-xs py-1 px-2 text-center">2</td>
            </tr>
            <tr>
              <td className="text-xs py-1 px-2 text-center">عنوان</td>
              <td className="text-xs py-1 px-2 text-center">231</td>
              <td className="text-xs py-1 px-2 text-center">100ت</td>
              <td className="text-xs py-1 px-2 text-center">تاریخ</td>
              <td className="text-xs py-1 px-2 text-center">2</td>
            </tr>
          </table>
        </div>
      </div>
    </section>
  )
}

export default CustomerInfo
