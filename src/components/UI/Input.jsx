import React from 'react'
import { useId } from 'react'
// import PropTypes from 'prop-types'

import '../../sass/UI/input.scss'

function Input(
  {
    type,
    label,
    placeholder,
    textarea,
    children,
    onFocus,
    onBlur,
    className,
    readOnly,
    value,
  },
  ref
) {
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
          ref={ref}
        ></textarea>
      ) : (
        <input
          readOnly={readOnly}
          type={type}
          id={id}
          placeholder={placeholder}
          onFocus={onFocus}
          onBlur={onBlur}
          value={value}
          ref={ref}
        />
      )}
    </label>
  )
}

// Input.defaultProps = {
//   type: 'text',
//   textarea: false,
// }
// Input.proptypes = {
//   type: PropTypes.string,
//   label: PropTypes.string,
//   placeholder: PropTypes.string,
// }

export default React.forwardRef(Input)
