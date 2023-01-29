import React, { useId } from 'react'

function AuthInput({ children, ...input }, ref) {
  const id = useId()

  return (
    <label htmlFor={id} className="auth-input">
      {children}
      <input id={id} {...input} ref={ref} />
    </label>
  )
}

export default React.forwardRef(AuthInput)
