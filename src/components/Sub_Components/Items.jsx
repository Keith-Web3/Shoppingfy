import React from 'react'
import { useDispatch } from 'react-redux'

import actions from '../Store/index'
import check from '../../assets/check-solid.svg'
import minus from '../../assets/minus-solid.svg'
import '../../sass/sub-components/items.scss'

function Items({ item, itemCount, selected }) {
  const dispatch = useDispatch()

  return (
    <div className="items">
      <div
        className="checkbox"
        onClick={e => {
          const category =
            e.target.parentElement.closest('.items-container').firstElementChild
          dispatch(
            actions.items.toggleChecked({
              category: category.textContent,
              item,
            })
          )
        }}
      >
        {selected && <img src={check} alt="check" />}
      </div>
      <p style={{ textDecoration: selected ? 'line-through' : 'none' }}>
        {item}
      </p>
      <p className="item-count">
        {itemCount} pcs{' '}
        <img
          src={minus}
          alt="minus"
          onClick={e => {
            const category =
              e.target.parentElement.closest(
                '.items-container'
              ).firstElementChild
            dispatch(
              actions.items.removeItem({
                item: item,
                category: category.textContent,
              })
            )
          }}
        />
      </p>
    </div>
  )
}

export default Items
