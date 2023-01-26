import React from 'react'
import { useState } from 'react'

import check from '../../assets/check-solid.svg'
import '../../sass/sub-components/items.scss'

function Items({ item }) {
  const [itemCount, setItemCount] = useState(1)

  return (
    <div className="items">
      <div className="checkbox">
        <img src={check} alt="check" />
      </div>
      <p>{item}</p>
      <p className="item-count">{itemCount} pcs</p>
    </div>
  )
}

export default Items
