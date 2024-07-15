import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import image from '../../assets/images/bookcover.svg'

const BookInfo = () => {
  const params = useParams()

  const [thisBook, setThisBook] = useState('')

  async function fetchBooksData() {
    fetch(`https://66640b00932baf9032a9c41b.mockapi.io/books/${params.bookId}`)
      .then(res => res.json())
      .then(bookData => setThisBook(bookData))
      .catch(error => alert(error))      
  }

  const navigate = useNavigate()

  useEffect(() => {
    fetchBooksData()
    if (!Boolean(localStorage.getItem('isLoggedIn'))) {
      navigate('/')
      alert('ابتدا وارد حساب کاربری خود شوید')
    }
  }, [])

  return (
    <section className="flex flex-col gap-5 p-5 Vazirmatn-Medium" dir="rtl">
      <div className="flex justify-between relative">
        <h2 className="text-xl text-COLOR_1 drop-shadow-md">اطلاعات کتاب</h2>
      </div>
      <div className="flex flex-col gap-4 items-center h-[500px] py-4 rounded-[20px] bg-COLOR_4 text-COLOR_3">
        <figure>
          <img className="bg-red-400 max-w-32" src={thisBook.imageURL} alt="" />
        </figure>
        <div className="flex gap-5 px-10">
          <div className='flex flex-col gap-3 w-24'>
            <div className="flex justify-between">
              <span className="whitespace-nowrap">عنوان</span>
              <span>:</span>
            </div>
            <div className="flex justify-between">
              <span className="whitespace-nowrap">نام نویسنده</span>
              <span>:</span>
            </div>
            <div className="flex justify-between">
              <span className="whitespace-nowrap">ژانر</span>
              <span>:</span>
            </div>
            <div className="flex justify-between">
              <span className="whitespace-nowrap">کد کتاب</span>
              <span>:</span>
            </div>
            <div className="flex justify-between">
              <span className="whitespace-nowrap">قیمت</span>
              <span>:</span>
            </div>
            <div className="flex justify-between">
              <span className="whitespace-nowrap">تعداد</span>
              <span>:</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <span className="line-clamp-1">{thisBook.title}</span>
            <span className="line-clamp-1">{thisBook.author}</span>
            <span className="line-clamp-1">{thisBook.genre}</span>
            <span className="line-clamp-1">{thisBook.id}</span>
            <span className="line-clamp-1">{thisBook.price} تومان</span>
            <span className="line-clamp-1">{thisBook.count}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BookInfo
