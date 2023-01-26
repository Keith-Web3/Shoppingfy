import React from 'react'
import { nanoid } from 'nanoid'

import Header from './Header'
import Item from '../../Sub_Components/Item'
import shoppingData from '../../Data/ShoppingItems'
import '../../../sass/pages/homepage.scss'

function Homepage({ navShown }) {
  return (
    <div className="homepage" style={{ display: navShown ? 'none' : 'block' }}>
      <div className="container">
        <Header />
        <section>
          <div>
            <h2>Fruits and vegetables</h2>
            {shoppingData.fruits.map(item => (
              <Item key={nanoid()}>{item}</Item>
            ))}
          </div>
          <div>
            <h2>Meat and Fish</h2>
            {shoppingData.meat.map(item => (
              <Item key={nanoid()}>{item}</Item>
            ))}
          </div>
          <div>
            <h2>Beverages</h2>
            {shoppingData.beverages.map(item => (
              <Item key={nanoid()}>{item}</Item>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Homepage
