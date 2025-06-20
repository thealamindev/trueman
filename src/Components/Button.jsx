import React from 'react'

const Button = ({btnText,className}) => {
  return (
    <button className={`font-medium font-roboto text-[18px] ${className}`}>{btnText}</button>
  )
}

export default Button