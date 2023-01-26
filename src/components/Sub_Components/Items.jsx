import React from 'react'
import { useState } from 'react'

import check from '../../assets/check-solid.svg'
import '../../sass/sub-components/items.scss'

function Items({ item, itemCount }) {
  const [selected, setSelected] = useState(false)
  return (
    <div className="items">
      <div className="checkbox" onClick={() => setSelected(prev => !prev)}>
        {selected && <img src={check} alt="check" />}
      </div>
      <p style={{ textDecoration: selected ? 'line-through' : 'none' }}>
        {item}
      </p>
      <p className="item-count">{itemCount} pcs</p>
    </div>
  )
}

export default Items
