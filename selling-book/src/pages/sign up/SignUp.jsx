import React, { useEffect, useState } from 'react'
import SubmitButton from '../../components/submit/SubmitButton'
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'
import * as yup from 'yup'

function SignUp() {
  let [postValue, setPostValue] = useState('')
  let titleValue

  function setTitleValueFunc() {
    switch (postValue) {
      case 'Admin':
        titleValue = 'ادمین'
        break;
      case 'Manager':
        titleValue = 'مدیر'
        break;
      case 'Seller':
        titleValue = 'فروشنده'
        break;
      case 'StockClerk':
        titleValue = 'انبار دار'
        break;
      default:
        break;
    }
    console.log(titleValue);
  }

  function addNewUserHandle(values) {
    fetch("https://66640b00932baf9032a9c41b.mockapi.io/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "username": values.username,
        "name": "",
        "password": values.password,
        "lastName": "",
        "phoneNumber": "",
        "post": postValue,
        "eamil": "",
        "imageURL": "",
        "title": titleValue
      },)
    })
  }

  const basicSchema = yup.object().shape({
    username: yup.string()
      .min(8, 'نام کاربری حداقل باید شامل ۸ کاراکتر باشد!')
      .max(20, 'نام کاربری حداکثر شامل ۲۰ کاراکتر میتواند باشد!')
      .required('نام کاربری وارد نشده است!'),
    password: yup.string()
      .min(8, 'رمز عبور حداقل باید شامل ۸ کاراکتر باشد!')
      .max(20, 'رمز عبور حداکثر شامل ۲۰ کاراکتر میتواند باشد!')
      .required('رمز عبور وارد نشده است!'),
    confirmPassword: yup.string()
      .oneOf([yup.ref('password'), null], 'تکرار رمز عبور مطابقت ندارد!')
      .required('تکرار رمز عبور وارد نشده است!'),
  })

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: (values, { resetForm }) => {
      setTitleValueFunc()
      addNewUserHandle(values)
      resetForm()
    },
    validationSchema: basicSchema
  })

  let [showPassword, setShowPassword] = useState(false)
  let [showConfirmPassword, setShowConfirmPassword] = useState(false)
  let showPasswordClass = 'size-6 transition-all duration-300 absolute inset-0'
  let showConfirmPasswordClass = 'size-6 transition-all duration-300 absolute inset-0'

  return (
    <section className="flex flex-col gap-2 items-center pt-5 Vazirmatn-Medium" dir="rtl">
      <div className="flex items-center flex-col gap-2 Vazirmatn-Medium">
        <h2 className="text-[30px] text-COLOR_1 drop-shadow-md">کتاب فروشی title</h2>
        <h1 className="flex flex-col text-[50px] text-center text-COLOR_4 drop-shadow-md leading-[55px]"><span>صفحه</span> <span>ثبت نام</span></h1>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col"
        action="">
        <div className="flex flex-col gap-3 relative">
          <label className="flex flex-col gap-2 relative" htmlFor="username">
            <span className="text-xl text-COLOR_1 Vazirmatn-SemiBold drop-shadow">نام کاربری</span>
            <input
              className="w-72 h-12 py-[14px] px-4 rounded-[20px] text-COLOR_2 outline-none Vazirmatn-SemiBold"
              type='text'
              id='username'
              name='username'
              maxLength={25}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              dir='ltr'
            />
            <div className="absolute -bottom-8 left-0">
              {formik.errors.username && formik.touched.username ? <div className='w-fit py-1 px-2 rounded-md text-[10px] bg-red-500 text-center text-COLOR_4 Vazirmatn-Regular'>{formik.errors.username}</div> : ''}
            </div>
          </label>
          <div className="flex flex-col gap-2 relative" htmlFor="password">
            <span className="text-xl text-COLOR_1 Vazirmatn-SemiBold drop-shadow">رمز عبور</span>
            <input
              className="w-72 h-12 py-[14px] px-4 rounded-[20px] text-COLOR_2 outline-none Vazirmatn-SemiBold"
              type={showPassword ? 'text' : 'password'}
              id='password'
              name='password'
              maxLength={25}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              dir='ltr'
            />
            <div onClick={() => setShowPassword(!showPassword)} className='size-6 absolute right-3 top-12 text-COLOR_2 cursor-pointer'>
              <svg className={showPassword ? `visible opacity-100 ${showPasswordClass}` : `invisible opacity-0 ${showPasswordClass}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              <svg className={showPassword ? `invisible opacity-0 ${showPasswordClass}` : `visible opacity-100 ${showPasswordClass}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
            </div>
            <div className="absolute -bottom-8 left-0">
              {formik.errors.password && formik.touched.password ? <div className='w-fit py-1 px-2 rounded-md text-[10px] bg-red-500 text-center text-COLOR_4 Vazirmatn-Regular'>{formik.errors.password}</div> : ''}
            </div>
          </div>
          <div className="flex flex-col gap-2 relative" htmlFor="confirmPassword">
            <span className="text-xl text-COLOR_1 Vazirmatn-SemiBold drop-shadow">تکرار رمز عبور</span>
            <input
              className="w-72 h-12 py-[14px] px-4 rounded-[20px] text-COLOR_2 outline-none Vazirmatn-SemiBold"
              type={showConfirmPassword ? 'text' : 'password'}
              id='confirmPassword'
              name='confirmPassword'
              maxLength={25}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.confirmPassword}
              dir='ltr'
            />
            <div onClick={() => setShowConfirmPassword(!showConfirmPassword)} className='size-6 absolute right-3 top-12 text-COLOR_2 cursor-pointer'>
              <svg className={showConfirmPassword ? `visible opacity-100 ${showConfirmPasswordClass}` : `invisible opacity-0 ${showConfirmPasswordClass}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              <svg className={showConfirmPassword ? `invisible opacity-0 ${showConfirmPasswordClass}` : `visible opacity-100 ${showConfirmPasswordClass}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
            </div>
            <div className="absolute -bottom-8 left-0">
              {formik.errors.confirmPassword && formik.touched.confirmPassword ? <div className='w-fit py-1 px-2 rounded-md text-[10px] bg-red-500 text-center text-COLOR_4 Vazirmatn-Regular'>{formik.errors.confirmPassword}</div> : ''}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-3 mt-9">
          <div className="flex items-center gap-3">
            <input
              onChange={e => setPostValue(e.target.value)}
              value="Manager"
              className="hidden peer/radio1"
              type="radio"
              id="radio1"
              name='radio' />
            <label className="size-4 bg-COLOR_4 peer-checked/radio1:bg-COLOR_2 outline outline-2 outline-COLOR_2 rounded-full cursor-pointer" htmlFor="radio1"></label>
            <label className="text-lg text-COLOR_4 cursor-pointer" htmlFor="radio1">مدیر</label>
          </div>
          <div className="flex items-center gap-3">
            <input
              onChange={e => setPostValue(e.target.value)}
              value="Seller"
              className="hidden peer/radio2"
              type="radio"
              id="radio2"
              name='radio' />
            <label className="size-4 bg-COLOR_4 peer-checked/radio2:bg-COLOR_2 outline outline-2 outline-COLOR_2 rounded-full cursor-pointer" htmlFor="radio2"></label>
            <label className="text-lg text-COLOR_4 cursor-pointer" htmlFor="radio2">فروشنده</label>
          </div>
          <div className="flex items-center gap-3">
            <input
              onChange={e => setPostValue(e.target.value)}
              value="StockClerk"
              className="hidden peer/radio3"
              type="radio"
              id="radio3"
              name='radio' />
            <label className="size-4 bg-COLOR_4 peer-checked/radio3:bg-COLOR_2 outline outline-2 outline-COLOR_2 rounded-full cursor-pointer" htmlFor="radio3"></label>
            <label className="text-lg text-COLOR_4 cursor-pointer" htmlFor="radio3">انبار دار</label>
          </div>
          <div className="flex items-center gap-3">
            <input
              onChange={e => setPostValue(e.target.value)}
              value="Admin"
              className="hidden peer/radio4"
              type="radio"
              id="radio4"
              name='radio' />
            <label className="size-4 bg-COLOR_4 peer-checked/radio4:bg-COLOR_2 outline outline-2 outline-COLOR_2 rounded-full cursor-pointer" htmlFor="radio4"></label>
            <label className="text-lg text-COLOR_4 cursor-pointer" htmlFor="radio4">ادمین</label>
          </div>
        </div>
        <div className="flex flex-col gap-3 mt-2">
          <SubmitButton title="ثبت نام" />
          {/* {isMistakePassword ? <div className='w-fit py-1 px-2 rounded-md text-[10px] bg-red-500 text-center text-COLOR_4 Vazirmatn-Regular'>{errorMistakeMessages[1]}</div> : ''}
          {isMistakeUserName ? <div className='w-fit py-1 px-2 rounded-md text-[10px] bg-red-500 text-center text-COLOR_4 Vazirmatn-Regular'>{errorMistakeMessages[0]}</div> : ''}
          {isMistakeBoth ? <div className='w-fit py-1 px-2 rounded-md text-[10px] bg-red-500 text-center text-COLOR_4 Vazirmatn-Regular'>{errorMistakeMessages[2]}</div> : ''}
          {isCorrectForm ? <div className='w-fit py-1 px-2 rounded-md text-[10px] bg-green-500 text-center text-COLOR_4 Vazirmatn-Regular'>موفقیت!!!</div> : ''} */}
        </div>
        <Link to={'/Login'} className="Vazirmatn-Medium text-sm text-COLOR_4 text-center mt-2">قبلا ثبت نام کرده اید؟</Link>
      </form>
    </section >
  )
}

export default SignUp
