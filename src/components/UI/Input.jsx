import React from 'react'
import { useId } from 'react'
import PropTypes from 'prop-types'

import '../../sass/UI/input.scss'

function Input({
  type,
  label,
  placeholder,
  textarea,
  children,
  onFocus,
  onBlur,
  className,
  maxLength,
}) {
  const id = useId()

  return (
    <label htmlFor={id} className={`input ${className}`}>
      {label}
      {children}
      {textarea ? (
        <textarea
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
        ></textarea>
      ) : (
        <input
          maxLength={maxLength}
          type={type}
          id={id}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      )}
    </label>
  )
}

Input.defaultProps = {
  type: 'text',
  textarea: false,
}
Input.proptypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
}

export default Input
