import React from 'react'

import plus from '../../assets/plus-solid.svg'
import '../../sass/sub-components/item.scss'

function Item({ children }) {
  return (
    <div className="item">
      <p>{children}</p>
      <img src={plus} alt="add-item" />
    </div>
  )
}

export default Item
