import React, { useEffect, useState } from 'react'
import Menu from '../../components/menu/Menu'
import { useNavigate, useParams } from 'react-router-dom';
// import picture from '../../assets/images/photo_2023-09-24_00-36-35.jpg'

const Profile = () => {
  const params = useParams()
  const navigate = useNavigate()
  const [thisUser, setThisUser] = useState('')

  useEffect(() => {
    fetch(`https://66640b00932baf9032a9c41b.mockapi.io/users/${params.id}`)
      .then(res => res.json())
      .then(user => setThisUser(user))
      .catch(error => alert(error))
  }, [])

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

  function handleSubmit(event) {
    event.preventDefault()
    console.log(srcPhoto);
  }

  let [newUserData, setNewUserData] = useState({
    name: thisUser.name,
    lastname: thisUser.lastName,
    email: thisUser.email,
    phoneNumber: thisUser.phoneNumber,
    imageURL: thisUser.imageURL,
  })

  function addNewUserHandle(values) {
    fetch(`https://66640b00932baf9032a9c41b.mockapi.io/users/${params.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "username": thisUser.username,
        "name": newUserData.name,
        "password": thisUser.password,
        "lastName": newUserData.lastname,
        "phoneNumber": newUserData.phoneNumber,
        "post": thisUser.post,
        "eamil": newUserData.email,
        "imageURL": newUserData.imageURL,
        "title": thisUser.title
      },)
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    addNewUserHandle()
    alert('اطلاعات ذخیره شد!')
  }

  return (
    <section className="flex flex-col gap-10 p-5 Vazirmatn-Medium" dir="rtl">
      <div className="flex justify-between relative">
        <h2 className="text-xl text-COLOR_1 drop-shadow-md Vazirmatn-Medium">پروفایل {thisUser.title}</h2>
        {
          thisUser.post == 'Manager' ?
            <Menu menuList={[
              { title: "پروفایل", navigateLink: '' },
              { title: "داشبورد", navigateLink: () => navigate('/DashboardManager') },
              { title: "اضافه کردن کتاب", navigateLink: () => navigate('/AddBook') },
              { title: "گزارشات", navigateLink: () => navigate('/Reports') },
              { title: "خروج از حساب", navigateLink: logOut }
            ]} /> : ''
        }
        {
          thisUser.post == 'Admin' ?
            <Menu menuList={[
              { title: "پروفایل", navigateLink: '' },
              { title: "داشبورد", navigateLink: () => navigate('/DashboardAdmin') },
              { title: "خروج از حساب", navigateLink: logOut }
            ]} /> : ''
        }
        {
          thisUser.post == 'Seller' ?
            <Menu menuList={[
              { title: "پروفایل", navigateLink: () => '' },
              { title: "داشبورد", navigateLink: () => navigate('/DashboardSeller') },
              { title: 'ثبت گزارش', navigateLink: () => navigate('/RecordReport') },
              { title: "سبد فروش", navigateLink: () => navigate('/ShoppingCart') },
              { title: "خروج از حساب", navigateLink: logOut }
            ]} /> : ''
        }
        {
          thisUser.post == 'StockClerk' ?
            <Menu menuList={[
              { title: "پروفایل", navigateLink: () => '' },
              { title: "داشبورد", navigateLink: () => navigate('/DashboardStockClerk') },
              { title: "اضافه کردن کتاب", navigateLink: () => navigate('/AddBook') },
              { title: "خروج از حساب", navigateLink: logOut }
            ]} /> : ''
        }
      </div>
      <div className='flex justify-center'>
        <form className="flex flex-col items-end gap-2" onSubmit={handleSubmit} >
          <div className="flex flex-col gap-4 text-COLOR_3 bg-COLOR_1 px-8 py-4 rounded-[20px] shadow">
            <div className="flex items-center justify-center gap-5">
              <figure className="rounded-full border-2">
                <img className="size-[120px] rounded-full object-cover" src={newUserData.imageURL ? newUserData.imageURL : thisUser.imageURL} alt="" />
              </figure>
              <label className="flex flex-col gap-2 items-center" htmlFor="file">
                <div className="text-COLOR_3">انتخاب عکس</div>
                <div className="bg-COLOR_4 px-3 py-1 rounded-md">choose file</div>
                <input
                  maxLength="25"
                  accept='.jpg, .jpeg, .png'
                  className='hidden'
                  id="file"
                  type="file"
                  onChange={e => setNewUserData({ ...newUserData, imageURL: `/images/${e.target.files[0].name}` })} />
              </label>
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="">نام</label>
              <input
                maxLength="25"
                className="w-[157px] bg-COLOR_4 rounded-lg py-2 px-2 text-xs outline-none"
                type="text"
                placeholder='حمید'
                defaultValue={thisUser.name}
                onChange={e => setNewUserData({ ...newUserData, name: e.target.value })}
              />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="">نام خانوادگی</label>
              <input
                maxLength="25"
                className="w-[157px] bg-COLOR_4 rounded-lg py-2 px-2 text-xs outline-none"
                type="text"
                placeholder='امینی'
                defaultValue={thisUser.lastName}
                onChange={e => setNewUserData({ ...newUserData, lastname: e.target.value })} />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="">ایمیل</label>
              <input
                maxLength="25"
                className="w-[157px] bg-COLOR_4 rounded-lg py-2 px-2 text-xs outline-none"
                type="text"
                placeholder='email@gmail.com'
                defaultValue={thisUser.email}
                onChange={e => setNewUserData({ ...newUserData, email: e.target.value })} />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="">شماره تلفن</label>
              <input
                maxLength="25"
                className="w-[157px] bg-COLOR_4 rounded-lg py-2 px-2 text-xs outline-none"
                type="text"
                placeholder='091234567891'
                defaultValue={thisUser.phoneNumber}
                onChange={e => setNewUserData({ ...newUserData, phoneNumber: e.target.value })} />
            </div>
            <div className="flex justify-between items-center">
              <label htmlFor="">سمت</label>
              <div className="w-[157px] bg-COLOR_4 rounded-lg py-2 px-2 text-xs" name="" id="">
                {thisUser.title}
              </div>
            </div>
          </div>
          <button className="px-8 py-2 rounded-[20px] bg-COLOR_2 text-COLOR_3 drop-shadow-md">ثبت</button>
        </form>
      </div>
    </section>
  )
}

export default Profile
