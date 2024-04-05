import React, { useState } from 'react'
import SubmitButton from '../../components/submit/SubmitButton'
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate()

  const username = 'hamidamini'
  const password = 'hamid1234'

  let [userNamevalue, setUserNameValue] = useState('')
  let [passwordValue, setPasswordValue] = useState('')

  let [isError, setIsError] = useState(false)

  function validation(Event) {
    if (username == userNamevalue && password == passwordValue) {
      Event.preventDefault()
      localStorage.setItem("isLoggedIn",true)
      navigate('/Dashboard')
    } else {
      Event.preventDefault()
      setIsError(true)
    }
  }
  return (
    <section className="flex flex-col gap-24 items-center pt-10" dir="rtl">
      <div className="flex items-center flex-col gap-8 Vazirmatn-Medium">
        <h2 className="text-[30px] text-COLOR_1 drop-shadow-md">کتاب فروشی title</h2>
        <h1 className="flex flex-col text-[50px] text-center text-COLOR_4 drop-shadow-md leading-[55px]"><span>صفحه</span> <span>ورود</span></h1>
      </div>
      <form
        onSubmit={e => validation(e)}
        className="flex flex-col gap-10"
        action="">
        <div className="flex flex-col gap-3">
          <label className="flex flex-col gap-3" htmlFor="username">
            <span className="text-xl text-COLOR_1 Vazirmatn-SemiBold drop-shadow">نام کاربری</span>
            <input
              className="w-64 h-12 py-[14px] px-4 rounded-[20px] text-COLOR_2 outline-none Vazirmatn-SemiBold"
              type='text'
              id='username'
              onChange={e => setUserNameValue(e.target.value)}
            />
          </label>
          <label className="flex flex-col gap-3" htmlFor="password">
            <span className="text-xl text-COLOR_1 Vazirmatn-SemiBold drop-shadow">رمز عبور</span>
            <input
              className="w-64 h-12 py-[14px] px-4 rounded-[20px] text-COLOR_2 outline-none Vazirmatn-SemiBold"
              type='password'
              id='password'
              onChange={e => setPasswordValue(e.target.value)}
            />
          </label>
        </div>
        <div className="flex flex-col gap-3">
          <SubmitButton title="ورود" />
          <div style={isError ? { display: 'block' } : { display: 'none' }} className='w-fit py-1 px-2 rounded-md text-[10px] bg-red-500 text-center text-COLOR_4 Vazirmatn-Regular'>نام کاربری یا  رمز عبور اشتباه است!</div>
        </div>
      </form>
    </section >
  )
}

export default Login
