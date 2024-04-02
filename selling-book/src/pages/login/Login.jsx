import React from 'react'
import InputElement from '../../components/input/Input'

function Login() {
  return (
    <section className="flex flex-col gap-[125px] items-center pt-10" dir="rtl">
      <div className="flex items-center flex-col gap-8 Vazirmatn-Medium">
        <h2 className="text-[30px] text-COLOR_1 drop-shadow-md">کتاب فروشی title</h2>
        <h1 className="flex flex-col text-[50px] text-center text-COLOR_4 drop-shadow-md leading-[55px]"><span>صفحه</span> <span>ورود</span></h1>
      </div>
      <form className="flex flex-col gap-5" action="">
        <InputElement title="نام کاربری" type="text" />
        <InputElement title="رمز عبور" type="password" />
      </form>
    </section>
  )
}

export default Login
