import React from 'react'

const Button = ({children,className=''}) => {
  return (
    <>
        <button className={`px-12 py-4 text-white border-white rounded-full border hover:scale-110 duration-200 ease-in ${className}`}>{children}</button>
    </>
  )
}

export default Button