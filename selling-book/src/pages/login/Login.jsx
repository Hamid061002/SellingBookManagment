import React, { useState } from 'react'
import SubmitButton from '../../components/submit/SubmitButton'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik'
import * as yup from 'yup'

function Login({ data }) {
  const basicSchema = yup.object().shape({
    username: yup.string()
      .min(8, 'نام کاربری حداقل باید شامل ۸ کاراکتر باشد!')
      .max(20, 'نام کاربری حداکثر شامل ۲۰ کاراکتر میتواند باشد!')
      .required('نام کاربری وارد نشده است!'),
    password: yup.string()
      .min(8, 'رمز عبور حداقل باید شامل ۸ کاراکتر باشد!')
      .max(20, 'رمز عبور حداکثر شامل ۲۰ کاراکتر میتواند باشد!')
      .required('رمز عبور وارد نشده است!')
  })

  const formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    onSubmit: values => {
      console.log(data);
      if (data.find(user => user.username == values.username && user.password == values.password)) {
        let user = data.find(user => user.username == values.username && user.password == values.password)
        switch (user.post) {
          case 'Admin':
            navigate('/DashboardAdmin')
            break;
          case 'Seller':
            navigate('/DashboardSeller')
            break;
          case 'Manager':
            navigate('/DashboardManager')
            break;
          case 'StockClerk':
            navigate('/DashboardStockCLerk')
            break;
          default:
            break;
        }
        localStorage.setItem("isLoggedIn", true)
        setIsCorrectForm(true)
      } else if (!data.find(user => user.username == values.username) && data.find(user => user.password == values.password)) {
        setIsMistakeUserName(true)
        setIsMistakePassword(false)
        setIsMistakeBoth(false)
      } else if (data.find(user => user.username == values.username) && !data.find(user => user.password == values.password)) {
        setIsMistakePassword(true)
        setIsMistakeUserName(false)
        setIsMistakeBoth(false)
      } else if (!data.find(user => user.username == values.username) && !data.find(user => user.password == values.password)) {
        setIsMistakePassword(false)
        setIsMistakeUserName(false)
        setIsMistakeBoth(true)
      }
    },
    validationSchema: basicSchema
  })

  const navigate = useNavigate()

  let [showPassword, setShowPassword] = useState(false)
  let showPasswordClass = 'size-6 transition-all duration-300 absolute right-3 bottom-8'

  let [isCorrectForm, setIsCorrectForm] = useState(false)
  let [isMistakeUserName, setIsMistakeUserName] = useState(false)
  let [isMistakePassword, setIsMistakePassword] = useState(false)
  let [isMistakeBoth, setIsMistakeBoth] = useState(false)
  let errorMistakeMessages = ['نام کاربری نادرست میباشد!', 'رمز عبور نادرست میباشد!', 'نام کاربری و رمز عبور نادرست میباشند!']

  // let [userNamevalue, setUserNameValue] = useState('')
  // let [passwordValue, setPasswordValue] = useState('')


  // let [isErrorPassword, setIsErrorPassword] = useState(false)
  // let [isErrorUserName, setIsErrorUserName] = useState(false)

  // let errorMessages = ['رمز عبور نادرست است!', 'رمز عبور وارد نشده است!', 'رمز عبور باید بین ۸ تا ۲۰ کاراکتر داشته باشد!','رمز عبور باید شامل اعداد و حروف انگلیسی باشد!']
  // let [errorPasswordValue, setErrorPasswordValue] = useState('')
  // let [errorUserNameValue, setErrorUserNameValue] = useState('')

  // let lengthValid = /^[\w\W]{8,20}$/
  // let userNameValid = /^[a-zA-Z0-9]+$/
  // let passwordValid = /^[a-zA-Z]+$/

  // function userNameValidation() {
  //   if (lengthValid.test(userNamevalue)) {

  //   }
  // }

  // function passwordValidation() {
  //   if (lengthValid.test(passwordValue) && passwordValid.test(passwordValid)) {
  //     setIsErrorPassword(false)
  //     setErrorPasswordValue('')
  //   } else {
  //     setIsErrorPassword(true)
  //     !lengthValid.test(passwordValue) ? setErrorPasswordValue(errorMessages[2]) : '' 
  //     !passwordValid.test(passwordValue) ? setErrorPasswordValue(errorMessages[3]) : ''
  //     !passwordValue ? setErrorPasswordValue(errorMessages[1]) : '' 
  //   }
  // }

  // function handleSubmit(Event) {
  //   if (data.find(user => user.username == userNamevalue && user.password == passwordValue)) {
  //     Event.preventDefault()
  //     navigate('/Dashboard')
  //     localStorage.setItem("isLoggedIn", true)
  //   }
  //   else if (!userNamevalue || !passwordValue) {
  //     Event.preventDefault()
  //     setIsErrorMistake(false)
  //     setIsErrorEmpty(true)
  //     setErrorPasswordValue(errorMessages[1])
  //   } else {
  //     Event.preventDefault()
  //     setIsErrorMistake(true)
  //     setIsErrorEmpty(false)
  //     setErrorPasswordValue(errorMessages[0])
  //   }
  // }
  return (
    <section className="flex flex-col gap-16 items-center pt-10" dir="rtl">
      <div className="flex items-center flex-col gap-8 Vazirmatn-Medium">
        <h2 className="text-[30px] text-COLOR_1 drop-shadow-md">کتاب فروشی title</h2>
        <h1 className="flex flex-col text-[50px] text-center text-COLOR_4 drop-shadow-md leading-[55px]"><span>صفحه</span> <span>ورود</span></h1>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col gap-10"
        action="">
        <div className="flex flex-col gap-9 relative">
          <label className="flex flex-col gap-2 relative" htmlFor="username">
            <span className="text-xl text-COLOR_1 Vazirmatn-SemiBold drop-shadow">نام کاربری</span>
            <input
              className="w-64 h-12 py-[14px] px-4 rounded-[20px] text-COLOR_2 outline-none Vazirmatn-SemiBold"
              type='text'
              id='username'
              name='username'
              maxLength={25}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.username}
              dir='ltr'
            />
            <div className="absolute -bottom-8">
              {formik.errors.username && formik.touched.username ? <div className='w-fit py-1 px-2 rounded-md text-[10px] bg-red-500 text-center text-COLOR_4 Vazirmatn-Regular'>{formik.errors.username}</div> : ''}
            </div>
          </label>
          <label className="flex flex-col gap-2 relative" htmlFor="password">
            <span className="text-xl text-COLOR_1 Vazirmatn-SemiBold drop-shadow">رمز عبور</span>
            <input
              className="w-64 h-12 py-[14px] px-4 rounded-[20px] text-COLOR_2 outline-none Vazirmatn-SemiBold"
              type={showPassword ? 'text' : 'password'}
              id='password'
              name='password'
              maxLength={25}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              dir='ltr'
            />
            <div onClick={() => setShowPassword(!showPassword)} className='size-3 text-COLOR_2 cursor-pointer'>
              <svg className={showPassword ? `visible opacity-100 ${showPasswordClass}` : `invisible opacity-0 ${showPasswordClass}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              <svg className={showPassword ? `invisible opacity-0 ${showPasswordClass}` : `visible opacity-100 ${showPasswordClass}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
              </svg>
            </div>
            <div className="absolute -bottom-3">
              {formik.errors.password && formik.touched.password ? <div className='w-fit py-1 px-2 rounded-md text-[10px] bg-red-500 text-center text-COLOR_4 Vazirmatn-Regular'>{formik.errors.password}</div> : ''}
            </div>
          </label>
        </div>
        <div className="flex flex-col gap-3">
          <SubmitButton title="ورود" />
          {isMistakePassword ? <div className='w-fit py-1 px-2 rounded-md text-[10px] bg-red-500 text-center text-COLOR_4 Vazirmatn-Regular'>{errorMistakeMessages[1]}</div> : ''}
          {isMistakeUserName ? <div className='w-fit py-1 px-2 rounded-md text-[10px] bg-red-500 text-center text-COLOR_4 Vazirmatn-Regular'>{errorMistakeMessages[0]}</div> : ''}
          {isMistakeBoth ? <div className='w-fit py-1 px-2 rounded-md text-[10px] bg-red-500 text-center text-COLOR_4 Vazirmatn-Regular'>{errorMistakeMessages[2]}</div> : ''}
          {isCorrectForm ? <div className='w-fit py-1 px-2 rounded-md text-[10px] bg-green-500 text-center text-COLOR_4 Vazirmatn-Regular'>موفقیت!!!</div> : ''}
        </div>
      </form>
    </section >
  )
}

export default Login
