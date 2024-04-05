import React, { useState } from 'react'

const CustomersTable = () => {
    let [salesHistoryOrCustomers,setSalesHistoryCustomers] = useState(true)
    return (
        <div className="flex relative">
            <button onClick={e => setSalesHistoryCustomers(!salesHistoryOrCustomers)} className="flex items-center gap-1 p-[10px] bg-COLOR_2 rounded-t-[20px] active:brightness-90 shadow-md overflow-hidden cursor-pointer">
                <span className="text-[10px] text-COLOR_4 Vazirmatn-Regular">لیست مشتریان</span>
                <svg className={salesHistoryOrCustomers? 'rotate-0':'rotate-180'} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.95579 4.92815L14.2891 10.2615L12.8891 11.7281L8.95579 7.79482L5.02246 11.7281L3.62246 10.2615L8.95579 4.92815Z" fill="#F8F1F1" />
                </svg>
            </button>
            <div style={salesHistoryOrCustomers? {display:'flex'}:{display:'none'}} className="flex flex-col gap-[6px] absolute p-[14px] right-0 top-9 w-full bg-COLOR_2 rounded-l-[20px] rounded-br-[20px]">
                <div className="flex gap-3">
                    <input
                        className="flex items-center w-full h-[22px] px-3 text-[8px] text-COLOR_2 placeholder:text-COLOR_2 placeholder:text-opacity-50 Vazirmatn-Medium outline-none border border-COLOR_3 rounded-[20px] shadow"
                        placeholder='جستجوی مشتری...'
                        type="searchInput" />
                    <button className="text-xs text-COLOR_4 drop-shadow Vazirmatn-Medium">ویرایش</button>
                </div>
                <table className="w-full bg-COLOR_4 rounded-b-md overflow-hidden border border-COLOR_3 shadow-md Vazirmatn-Light">
                    <thead className="border-b border-COLOR_3">
                        <tr className="text-COLOR_3 *:border-l *:border-COLOR_3">
                            <th className="px-1 py-1 text-[7px]">نام</th>
                            <th className="px-1 py-1 text-[7px]">نام خانوادگی</th>
                            <th className="px-1 py-1 text-[7px]">شماره تلفن</th>
                            <th className="px-1 py-1 text-[7px]">ایمیل</th>
                            <th className="px-1 py-1 text-[7px]">کد ملی</th>
                            <th className="px-1 py-1 text-[7px]">ID</th>
                        </tr>
                    </thead>
                    <tbody className="*:border-b *:border-COLOR_3">
                        <tr className="text-COLOR_3 *:border-l *:border-COLOR_3">
                            <th className=" py-1 text-[7px]">حمید</th>
                            <th className=" py-1 text-[7px]">امینی</th>
                            <th className=" py-1 text-[7px]">09390320735</th>
                            <th className=" py-1 text-[7px]">hamid@gmail.com</th>
                            <th className=" py-1 text-[7px]">31234567891</th>
                            <th className=" py-1 text-[7px]">1</th>
                        </tr>
                        <tr className="text-COLOR_3 *:border-l *:border-COLOR_3">
                            <th className=" py-1 text-[7px]">حمید</th>
                            <th className=" py-1 text-[7px]">امینی</th>
                            <th className=" py-1 text-[7px]">09390320735</th>
                            <th className=" py-1 text-[7px]">hamid@gmail.com</th>
                            <th className=" py-1 text-[7px]">31234567891</th>
                            <th className=" py-1 text-[7px]">1</th>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button onClick={e => setSalesHistoryCustomers(!salesHistoryOrCustomers)} className="flex items-center gap-1 p-[10px] bg-COLOR_3 rounded-t-[20px] active:brightness-90 shadow-md overflow-hidden cursor-pointer">
                <span className="text-[10px] text-COLOR_4 Vazirmatn-Regular">تاریخچه فروش</span>
                <svg className={salesHistoryOrCustomers? 'rotate-180':'rotate-0'} width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.95579 4.92815L14.2891 10.2615L12.8891 11.7281L8.95579 7.79482L5.02246 11.7281L3.62246 10.2615L8.95579 4.92815Z" fill="#F8F1F1" />
                </svg>
            </button>
            <div style={salesHistoryOrCustomers? {display:'none'}:{display:'flex'}} className="flex flex-col gap-[6px] absolute p-[14px] right-0 top-9 w-full bg-COLOR_3 rounded-l-[20px] rounded-br-[20px]">
                <div className="flex gap-3">
                    <input
                        className="flex items-center w-full h-[22px] px-3 text-[8px] text-COLOR_3 placeholder:text-COLOR_3 placeholder:text-opacity-50 Vazirmatn-Medium outline-none border border-COLOR_3 rounded-[20px] shadow"
                        placeholder='جستجوی مشتری...'
                        type="searchInput" />
                    <button className="text-xs text-COLOR_4 drop-shadow Vazirmatn-Medium">ویرایش</button>
                </div>
                <table className="w-full bg-COLOR_4 rounded-b-md overflow-hidden shadow-md Vazirmatn-Light">
                    <thead className="border-b border-COLOR_3">
                        <tr className="text-COLOR_3 *:border-l *:border-COLOR_3">
                            <th className="px-1 py-1 text-[7px]">اسم کتاب</th>
                            <th className="px-1 py-1 text-[7px]">تعداد</th>
                            <th className="px-1 py-1 text-[7px]">نام نویسنده</th>
                            <th className="px-1 py-1 text-[7px]">تاریخ فروش</th>
                            <th className="px-1 py-1 text-[7px]">کد کتاب</th>
                            <th className="px-1 py-1 text-[7px]">ID</th>
                        </tr>
                    </thead>
                    <tbody className="*:border-b *:border-COLOR_3">
                        <tr className="text-COLOR_3 *:border-l *:border-COLOR_3">
                            <th className=" py-1 text-[7px]">title</th>
                            <th className=" py-1 text-[7px]">2</th>
                            <th className=" py-1 text-[7px]">title</th>
                            <th className=" py-1 text-[7px]">12/3/1402</th>
                            <th className=" py-1 text-[7px]">124</th>
                            <th className=" py-1 text-[7px]">1</th>
                        </tr>
                        <tr className="text-COLOR_3 *:border-l *:border-COLOR_3">
                            <th className=" py-1 text-[7px]">title</th>
                            <th className=" py-1 text-[7px]">2</th>
                            <th className=" py-1 text-[7px]">title</th>
                            <th className=" py-1 text-[7px]">12/3/1402</th>
                            <th className=" py-1 text-[7px]">124</th>
                            <th className=" py-1 text-[7px]">1</th>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default CustomersTable
