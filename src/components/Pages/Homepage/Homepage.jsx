import React from 'react'
import { nanoid } from 'nanoid'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'

import actions from '../../Store/index'
import Header from './Header'
import Item from '../../Sub_Components/Item'
import '../../../sass/pages/homepage.scss'

function Homepage({ navShown }) {
  const state = useSelector(state => Object.entries(state.items))
  const dispatch = useDispatch()

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="homepage"
      style={{ display: navShown ? 'none' : 'block' }}
    >
      <div className="container">
        <Header />
        <section>
          {state.map(item => {
            return (
              <div>
                <h2>{item[0]}</h2>
                {item[1].map(data => (
                  <Item
                    onClick={() => {
                      dispatch(
                        actions.items.addItem({
                          category: item[0],
                          item: data.item,
                        })
                      )
                    }}
                    key={nanoid()}
                  >
                    {data.item}
                  </Item>
                ))}
              </div>
            )
          })}
        </section>
      </div>
    </motion.div>
  )
}

export default Homepage
