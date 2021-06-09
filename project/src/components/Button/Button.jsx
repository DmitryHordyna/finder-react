import React from 'react'
//styles
import './Button.scss'

const Button = ({ buttonLabel,onClick }) => {
    return (
          <button type='button' className="Button" onClick={onClick}>
            <span className="load-more-label">{buttonLabel}</span>
    </button>
  )  
}
export default Button

