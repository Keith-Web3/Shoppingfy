import React from 'react'

import '../../sass/sub-components/item_preview.scss'
import Button from '../UI/Button'
import backArrow from '../../assets/arrow-left.svg'
import placeHolderImg from '../../assets/brooke-lark-oaz0raysASk-unsplash.jpg'

function ItemPreview({ navShown }) {
  return (
    <div
      className="item-preview"
      style={{ display: navShown ? 'block' : 'none' }}
    >
      <div className="container">
        <div className="back-btn">
          <img src={backArrow} alt="back" />
          <p>back</p>
        </div>
        <img src={placeHolderImg} alt="food image" className="placeholder" />
        <h3>name</h3>
        <p>Avocado</p>
        <h3>category</h3>
        <p>Fruit and vegetables</p>
        <h3>note</h3>
        <p>
          Nutrient-dense foods are those that provide substantial amounts of
          vitamins, minerals and other nutrients with relatively few calories.
          One-third of a medium avocado (50 g) has 80 calories and contributes
          nearly 20 vitamins and minerals, making it a great nutrient-dense food
          choice.{' '}
        </p>
        <div className="btn-container">
          <Button style={{ bg: 'transparent' }}>delete</Button>
          <Button style={{ bg: '#F9A109', color: '#fff' }}>Add to list</Button>
        </div>
      </div>
    </div>
  )
}

export default ItemPreview
