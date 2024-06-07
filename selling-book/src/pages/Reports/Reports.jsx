import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Menu from '../../components/menu/Menu'

const Reports = () => {
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

  let [showReportSeller, setShowReportSeller] = useState(false)
  let [showReportStockClerk, setShowReportStockClerk] = useState(false)
  return (
    <section className="flex flex-col gap-10 p-5 Vazirmatn-Medium" dir="rtl">
      <div className="flex justify-between relative">
        <h2 className="text-xl text-COLOR_1 drop-shadow-md Vazirmatn-Medium">گزارشات</h2>
        <Menu menuList={[
          { title: "پروفایل", navigateLink: () => navigate(`/Profile/Manager`) },
          { title: "داشبورد", navigateLink: () => navigate('/DashboardManager') },
          { title: "اضافه کردن کتاب", navigateLink: () => navigate('/AddBook') },
          { title: "گزارشات", navigateLink: () => navigate('/Reports') },
          { title: "خروج از حساب", navigateLink: logOut }]} />
      </div>
      <div className="flex flex-col gap-2 bg-COLOR_1 rounded-[20px] w-full h-[600px] py-4 px-8">
        <button
          onClick={() => setShowReportSeller(!showReportSeller)}
          className="flex justify-between items-center bg-COLOR_7 rounded-[10px] text-COLOR_3 h-[38px] px-3 cursor-pointer">
          <span className="Vazirmatn-SemiBold">گزارش فروشندگان</span>
          <i className={!showReportSeller && "rotate-180"}>
            <svg class="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>
          </i>
        </button>
        {
          showReportSeller &&
            <div className="bg-COLOR_7 mx-2 pe-1 rounded-[10px] overflow-hidden">
              <div className="flex flex-col my-2 gap-5 max-h-52 overflow-y-scroll scrollBarReports rounded-[10px] p-3 text-xs text-COLOR_3">
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                <time>از ۱۲ / ۶ / ۱۴۰۲ تا ۱۲ / ۷ / ۱۴۰۲</time>
              </div>
            </div> 
        }
        <button
          onClick={() => setShowReportStockClerk(!showReportStockClerk)}
          className="flex justify-between items-center bg-COLOR_7 rounded-[10px] text-COLOR_3 h-[38px] px-3 cursor-pointer">
          <span className="Vazirmatn-SemiBold">گزارش انباردار</span>
          <i className={!showReportStockClerk && "rotate-180"}>
            <svg class="size-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>
          </i>
        </button>
        {
          showReportStockClerk &&
            <div className="bg-COLOR_7 mx-2 pe-1 rounded-[10px] overflow-hidden">
              <div className="flex flex-col my-2 gap-5 max-h-52 overflow-y-scroll scrollBarReports rounded-[10px] p-3 text-xs text-COLOR_3">
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                <time>از ۱۲ / ۶ / ۱۴۰۲ تا ۱۲ / ۷ / ۱۴۰۲</time>
              </div>
            </div> 
        }

      </div>
    </section>
  )
}

export default Reports
