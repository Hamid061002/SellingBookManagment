import React from 'react'

const SubmitButton = (props) => {
  return (
    <button className="py-2 px-8 rounded-[20px] text-COLOR_3 bg-COLOR_2 Vazirmatn-Medium active:brightness-90 Transition shadow-md drop-shadow-md" type="submit">{props.title}</button>
  )
}

export default SubmitButton
