import React from 'react'

const InputElement = (props) => {
   fetch('https://api.escuelajs.co/api/v1/products')
   .then(res => res.json()).then(data => console.log(data))
   return (
      <label className="flex flex-col gap-3" htmlFor="username">
         <span className="text-xl text-COLOR_1 Vazirmatn-SemiBold drop-shadow">{props.title}</span>
         <input 
         className="w-64 h-12 py-[14px] px-4 rounded-[20px] text-COLOR_2 outline-none Vazirmatn-SemiBold"  
         id="username" 
         type={props.type}          
         />
      </label>
   )
}

export default InputElement
