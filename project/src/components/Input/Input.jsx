import React from 'react'
//styles
import './Input.scss'

const Input = () => {
    return (
      <input
      className="SearchForm-input"
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
    )
}
export default Input