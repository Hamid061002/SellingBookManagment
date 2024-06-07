import React from 'react'
import { Link } from 'react-router-dom'

const BooksList = () => {
  return (
    <div className="flex flex-col gap2 items-end w-full p-2 rounded-[20px] bg-COLOR_4 text-COLOR_3 h-[500px] shadow-md Vazirmatn-Medium">
      <Link to={'/AddBook/StockClerk'} className="font-bold p-1">اضافه کردن</Link>
      <table className="text-xs w-full">
        <tr className="*:border-COLOR_3 border-COLOR_3 text-center">
          <th className="p-2 border-l border-b">اسم کتاب</th>
          <th className="p-2 border-l border-b">تعداد</th>
          <th className="p-2 border-l border-b">نام نویسنده</th>
          <th className="p-2 border-l border-b">ژانر</th>
          <th className="p-2 border-b">کد کتاب</th>
          <th></th>
        </tr>
        <tr className="*:border-COLOR_3 border-COLOR_3 text-center">
          <td className="p-2 border-l border-b">عنوان</td>
          <td className="p-2 border-l border-b">3</td>
          <td className="p-2 border-l border-b">اسم فامیل</td>
          <td className="p-2 border-l border-b">درام</td>
          <td className="p-2 border-b">241</td>
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
        <tr className="*:border-COLOR_3 border-COLOR_3 text-center">
          <td className="p-2 border-l border-b">عنوان</td>
          <td className="p-2 border-l border-b">3</td>
          <td className="p-2 border-l border-b">اسم فامیل</td>
          <td className="p-2 border-l border-b">درام</td>
          <td className="p-2 border-b">241</td>
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
        <tr className="*:border-COLOR_3 border-COLOR_3 text-center">
          <td className="p-2 border-l border-b">عنوان</td>
          <td className="p-2 border-l border-b">3</td>
          <td className="p-2 border-l border-b">اسم فامیل</td>
          <td className="p-2 border-l border-b">درام</td>
          <td className="p-2 border-b">241</td>
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
      </table>
    </div>
  )
}

export default BooksList
