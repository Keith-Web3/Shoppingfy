import React from 'react'
import { nanoid } from 'nanoid'

import bottle from '../../assets/source.svg'
import Button from '../UI/Button'
import pen from '../../assets/pen-solid.svg'
import '../../sass/sub-components/shopping_list.scss'
import shoppingData from '../Data/ShoppingItems'
import Items from './Items'

function ShoppingList({ navShown }) {
  const { fruits, beverages, meat } = shoppingData
  return (
    <div
      className="shopping_list"
      style={{ display: navShown ? 'block' : 'none' }}
    >
      <div className="container">
        <div className="hero">
          <img src={bottle} alt="add-item" />
          <div>
            <p>Didn’t find what you need?</p>
            <Button>Add Item</Button>
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
      </div>
    </div>
  )
}

export default ShoppingList
