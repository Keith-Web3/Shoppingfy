import React, { useId } from 'react'
import { nanoid } from 'nanoid'
import { motion } from 'framer-motion'

import bottle from '../../assets/source.svg'
import Button from '../UI/Button'
import pen from '../../assets/pen-solid.svg'
import '../../sass/sub-components/shopping_list.scss'
import shoppingData from '../Data/ShoppingItems'
import Items from './Items'

function ShoppingList({ navShown, setAsideState }) {
  const id = useId()

  const { fruits, beverages, meat } = shoppingData
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
          <div className="items-container">
            <h3>Fruits and vegetables</h3>
            {fruits.map(item => (
              <Items key={nanoid()} item={item} />
            ))}
          </div>
          <div className="items-container">
            <h3>Meat and Fish</h3>
            {meat.map(item => (
              <Items key={nanoid()} item={item} />
            ))}
          </div>
          <div className="items-container">
            <h3>Beverages</h3>
            {beverages.map(item => (
              <Items key={nanoid()} item={item} />
            ))}
          </div>
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
