import React from 'react'

import '../../sass/UI/button.scss'

function Button({ children, onClick, style }) {
  return (
    <button
      onClick={onClick}
      className="button"
      style={{
        backgroundColor: style.bg,
        color: style.color,
      }}
    >
      {children}
    </button>
  )
}

Button.defaultProps = {
  style: {
    bg: '#fff',
    color: '#000',
  },
}

export default Button
