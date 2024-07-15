import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const BooksList = () => {
  const navigate = useNavigate()

  const [books, setBooks] = useState([])
  
  useEffect(() => {
    fetch('https://66640b00932baf9032a9c41b.mockapi.io/books')
      .then(res => res.json())
      .then(booksData => setBooks([...booksData]))
      .catch(error => alert(error))
  }, [])
  return (
    <div className="flex flex-col gap2 items-end w-full p-2 pb-0 rounded-[20px] bg-COLOR_4 text-COLOR_3 max-h-[500px] shadow-md Vazirmatn-Medium">
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
        {
          books.map(book => (
            <tr
              onClick={() => navigate(`/BookInfo/${book.id}`)}
              className="*:border-COLOR_3 border-COLOR_3 text-center cursor-pointer">
              <td className=" p-2 border-l border-b">{book.title}</td>
              <td className=" p-2 border-l border-b">{book.count}</td>
              <td className=" p-2 border-l border-b">{book.author}</td>
              <td className=" p-2 border-l border-b">{book.genre}</td>
              <td className=" p-2 border-b">{book.id}</td>
            </tr>
          ))
        }
        {/* <tr className="*:border-COLOR_3 border-COLOR_3 text-center">
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
        </tr> */}
      </table>
    </div>
  )
}

export default BooksList
