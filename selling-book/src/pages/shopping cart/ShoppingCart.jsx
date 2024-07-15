import React from 'react'
import Menu from '../../components/menu/Menu'
import { useNavigate } from 'react-router-dom'

const ShoppingCart = () => {
  const navigate = useNavigate()

  function logOut() {
    localStorage.clear();
    navigate('/')
  }

  return (
    <section className="flex flex-col gap-10 p-5 Vazirmatn-Medium text-COLOR_3" dir="rtl">
      <div className="flex justify-between relative">
        <Menu menuList={[
          { title: "پروفایل", navigateLink: () => navigate(`/Profile/2`) },
          { title: "داشبورد", navigateLink: () => navigate('/DashboardSeller') },
          { title: 'ثبت گزارش', navigateLink: () => navigate('/RecordReport') },
          { title: "سبد فروش", navigateLink: () => '' },
          { title: "خروج از حساب", navigateLink: logOut }
        ]} />
      </div>
      <div className="flex flex-col bg-COLOR_1 rounded-[20px]">
        <h3 className="flex items-center justify-center h-10 border-b-2 border-COLOR_3">سبد فروش کتاب</h3>
        <table className="text-xs w-full">
          <tr className="*:border-COLOR_3 border-COLOR_3 text-center">
            <th className="p-2 border-l-2 border-b-2">اسم کتاب</th>
            <th className="p-2 border-l-2 border-b-2">تعداد</th>
            <th className="p-2 border-l-2 border-b-2">قیمت</th>
            <th className="p-2 border-b-2">کد کتاب</th>
            <th></th>
          </tr>
          <tr className="*:border-COLOR_3 border-COLOR_3 text-center">
            <td className="p-2 border-l-2">عنوان</td>
            <td className="p-2 border-l-2">3</td>
            <td className="p-2 border-l-2">100ت</td>
            <td className="p-2">241</td>
            <td className="flex justify-center gap-2 py-2">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-4 text-COLOR_5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-4 text-COLOR_6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </td>
          </tr>
          <tr className="*:border-COLOR_3 text-center">
            <td className="p-2 border-l-2">عنوان</td>
            <td className="p-2 border-l-2">3</td>
            <td className="p-2 border-l-2">100ت</td>
            <td className="p-2">241</td>
            <td className="flex justify-center gap-2 py-2">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-4 text-COLOR_5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-4 text-COLOR_6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </td>
          </tr>
          <tr className="*:border-COLOR_3 text-center">
            <td className="p-2 border-l-2">عنوان</td>
            <td className="p-2 border-l-2">3</td>
            <td className="p-2 border-l-2">100ت</td>
            <td className="p-2">241</td>
            <td className="flex justify-center gap-2 py-2">
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-4 text-COLOR_5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
              <button>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-4 text-COLOR_6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
              </button>
            </td>
          </tr>
          <tr className="*:border-COLOR_3 h-40">
            <td className="border-l-2"></td>
            <td className="border-l-2"></td>
            <td className="border-l-2"></td>
            <td className=""></td>
          </tr>
        </table>
        <div className="flex gap-1 border-y-2 py-5 px-3 border-COLOR_3 Vazirmatn-SemiBold">
          <span>جمع کل قیمت</span>
          <span>300</span>
          <span>تومان</span>
        </div>
        <div className="flex flex-col gap-3 py-5 px-3">
          <h3 className="Vazirmatn-SemiBold">مشخصات مشتری</h3>
          <form className="flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="flex items-center gap-2">
                <label className="text-xs whitespace-nowrap w-[70px] text-end" htmlFor="">نام :</label>
                <input className="flex-none bg-COLOR_7 rounded text-[10px] px-2 py-1 outline-none w-[60px]" placeholder="نام" type="text" />
              </div>
              <div className="flex items-center gap-2">
                <label className="text-xs whitespace-nowrap w-[60px] text-end" htmlFor="">شماره تلفن :</label>
                <input className="flex-none bg-COLOR_7 rounded text-[10px] px-2 py-1 outline-none w-[60px]" placeholder="نام" type="number" />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex items-center gap-2">
                <label className="text-xs whitespace-nowrap w-[70px] text-end" htmlFor="">نام خانوادگی :</label>
                <input className="flex-none bg-COLOR_7 rounded text-[10px] px-2 py-1 outline-none w-[60px]" placeholder="نام" type="text" />
              </div>
              <div className="flex items-center gap-2">
                <label className="text-xs whitespace-nowrap w-[60px] text-end" htmlFor="">کد ملی :</label>
                <input className="flex-none bg-COLOR_7 rounded text-[10px] px-2 py-1 outline-none w-[60px]" placeholder="نام" type="number" />
              </div>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-xs whitespace-nowrap w-[70px] text-end" htmlFor="">ایمیل :</label>
              <input className="flex-none bg-COLOR_7 rounded text-[10px] px-2 py-1 outline-none w-32" placeholder="ایمیل" type="email" />
            </div>
            <button className="py-2 px-6 bg-COLOR_3 text-COLOR_1 w-fit rounded-[10px] self-end">ثبت</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ShoppingCart
