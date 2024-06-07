import React from 'react'
import { useNavigate } from 'react-router-dom'

const Menu = ({ menuList }) => {
  let navigate = useNavigate()

  return (
    <label className="left-0 cursor-pointer">
      <input className="peer hidden" type="checkbox" />
      <svg className="peer-checked:invisible peer-checked:opacity-0 absolute left-0 Transition" width="22" height="19" viewBox="0 0 22 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="1.25" y1="9.75" x2="19.7738" y2="9.75" stroke="#E57C23" stroke-width="2.5" stroke-linecap="round" />
        <line x1="1.25" y1="17.75" x2="19.7738" y2="17.75" stroke="#E57C23" stroke-width="2.5" stroke-linecap="round" />
        <line x1="1.25" y1="1.75" x2="19.7738" y2="1.75" stroke="#E57C23" stroke-width="2.5" stroke-linecap="round" />
      </svg>
      <svg className="invisible opacity-0 peer-checked:visible peer-checked:opacity-100 absolute left-0 Transition" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="2" y1="17.2028" x2="17.2028" y2="2.00002" stroke="#E57C23" stroke-width="2.5" stroke-linecap="round" />
        <line x1="2.76777" y1="2" x2="17.9706" y2="17.2028" stroke="#E57C23" stroke-width="2.5" stroke-linecap="round" />
      </svg>
      <ul className="invisible opacity-0 peer-checked:visible peer-checked:opacity-100 Transition flex flex-col gap-[2px] absolute top-7 z-10 left-0 bg-COLOR_3 rounded-[10px] border border-COLOR_3 overflow-hidden shadow-md shadow-[#02546496]">
        {
          menuList.map(item => (<li onClick={item.navigateLink} className="w-full text-center py-[7px] px-2 text-xs bg-COLOR_2 text-COLOR_4 drop-shadow Vazirmatn-Regular">{item.title}</li>))
        }
      </ul>
    </label>
  )
}

export default Menu
