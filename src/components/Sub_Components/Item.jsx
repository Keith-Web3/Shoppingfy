import React from 'react'

import plus from '../../assets/plus-solid.svg'
import '../../sass/sub-components/item.scss'

function Item({ children, onClick }) {
  return (
    <div className="item">
      <p>{children}</p>
      <img src={plus} alt="add-item" onClick={onClick} />
    </div>
  )
}

export default Item
