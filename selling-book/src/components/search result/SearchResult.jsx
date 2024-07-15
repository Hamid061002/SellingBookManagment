import React from 'react'

const SearchResult = () => {
  return (
    <div className="flex flex-col gap2 items-end w-full p-2 rounded-[20px] bg-COLOR_4 text-COLOR_3 h-[500px] shadow-md Vazirmatn-Medium">
      <table className="text-[10px] w-full">
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
            <button className="text-[7px] whitespace-nowrap bg-COLOR_1 px-[5px] py-[2px] rounded-full">اضافه به سبد فروش</button>
          </td>
        </tr>
        <tr className="*:border-COLOR_3 border-COLOR_3 text-center">
          <td className="p-2 border-l border-b">عنوان</td>
          <td className="p-2 border-l border-b">3</td>
          <td className="p-2 border-l border-b">اسم فامیل</td>
          <td className="p-2 border-l border-b">درام</td>
          <td className="p-2 border-b">241</td>
          <td className="flex justify-center gap-2 py-2">
            <button className="text-[7px] whitespace-nowrap bg-COLOR_1 px-[5px] py-[2px] rounded-full">اضافه به سبد فروش</button>
          </td>
        </tr>
        <tr className="*:border-COLOR_3 border-COLOR_3 text-center">
          <td className="p-2 border-l border-b">عنوان</td>
          <td className="p-2 border-l border-b">3</td>
          <td className="p-2 border-l border-b">اسم فامیل</td>
          <td className="p-2 border-l border-b">درام</td>
          <td className="p-2 border-b">241</td>
          <td className="flex justify-center gap-2 py-2">
            <button className="text-[7px] whitespace-nowrap bg-COLOR_1 px-[5px] py-[2px] rounded-full">اضافه به سبد فروش</button>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default SearchResult
