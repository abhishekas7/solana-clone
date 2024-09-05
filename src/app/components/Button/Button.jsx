import React from 'react'
import style from './Button.module.css'

function Button({type="solid",children}) {
    
  return (
    <button className={`${type == "solid" ? style.solidbutton : style.transparentbutton }`}>{children}</button>
  )
}

export default Button