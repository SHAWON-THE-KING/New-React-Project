import React from 'react'

const Button = ({children,className=''}) => {
  return (
    <>
        <button className={`px-12 py-4 text-white border-white rounded-full border hover:font-bold ${className}`}>{children}</button>
    </>
  )
}

export default Button