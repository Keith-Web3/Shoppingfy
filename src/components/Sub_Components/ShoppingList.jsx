import React, { useId } from 'react'
import { nanoid } from 'nanoid'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'

import bottle from '../../assets/source.svg'
import Button from '../UI/Button'
import pen from '../../assets/pen-solid.svg'
import '../../sass/sub-components/shopping_list.scss'
import Items from './Items'

function ShoppingList({ navShown, setAsideState }) {
  const id = useId()

  const state = useSelector(state => Object.entries(state.items))

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'tween', duration: 0.25 }}
      className="shopping_list"
      style={{ display: navShown ? 'block' : 'none' }}
    >
      <div className="container">
        <div className="hero">
          <img src={bottle} alt="add-item" />
          <div>
            <p>Didn’t find what you need?</p>
            <Button onClick={() => setAsideState('add')}>Add Item</Button>
          </div>
        </div>
        <div className="container">
          <div className="heading">
            <p>Shopping list</p>
            <img src={pen} alt="add-item" />
          </div>
          {state.map(item => {
            return (
              <div key={nanoid()} className="items-container">
                <h3>{item[0]}</h3>
                {item[1].map(item => (
                  <Items
                    key={nanoid()}
                    item={item.item}
                    itemCount={item.count}
                  />
                ))}
              </div>
            )
          })}
        </div>
        <div className="input">
          <label htmlFor={id}>
            <input type="text" id={id} placeholder="Enter a name" />
            <Button style={{ bg: '#F9A109', color: '#FFFFFF' }}>Save</Button>
          </label>
        </div>
      </div>
    </motion.div>
  )
}

export default ShoppingList
