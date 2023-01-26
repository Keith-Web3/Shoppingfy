import React from 'react'
import { motion } from 'framer-motion'

import '../../sass/sub-components/item_preview.scss'
import Button from '../UI/Button'
import backArrow from '../../assets/arrow-left.svg'
import placeHolderImg from '../../assets/brooke-lark-oaz0raysASk-unsplash.jpg'

function ItemPreview({ navShown, newItem, setAsideState }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'tween', duration: 0.25 }}
      className="item-preview"
      style={{ display: navShown ? 'block' : 'none' }}
    >
      <div className="container">
        <div onClick={() => setAsideState('add')} className="back-btn">
          <img src={backArrow} alt="back" />
          <p>back</p>
        </div>
        <img
          src={
            newItem.url ||
            `https://source.unsplash.com/random/?food,${newItem.name.replace(
              ' ',
              ','
            )}} alt="food image" className="placeholder`
          }
        />
        <h3>name</h3>
        <p>{newItem.name}</p>
        <h3>category</h3>
        <p>{newItem.category}</p>
        <h3>note</h3>
        <p>
          {newItem.note ||
            `Nutrient-dense foods are those that provide substantial amounts of
          vitamins, minerals and other nutrients with relatively few calories.
          One-third of a medium avocado (50 g) has 80 calories and contributes
          nearly 20 vitamins and minerals, making it a great nutrient-dense food
          choice.`}
        </p>
        <div className="btn-container">
          <Button style={{ bg: 'transparent' }}>delete</Button>
          <Button style={{ bg: '#F9A109', color: '#fff' }}>Add to list</Button>
        </div>
      </div>
    </motion.div>
  )
}

export default ItemPreview
