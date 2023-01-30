import React, { useState, useDeferredValue } from 'react'
import { nanoid } from 'nanoid'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'

import useFilter from '../../Hooks/useFilter'
import actions from '../../Store/index'
import Header from './Header'
import Item from '../../Sub_Components/Item'
import '../../../sass/pages/homepage.scss'

function Homepage({ navShown }) {
  // const state = useSelector(state => Object.entries(state.items))
  const dispatch = useDispatch()
  const [searchParam, setSearchParam] = useState('')
  const debouncedValue = useDeferredValue(searchParam)
  const [filteredData] = useFilter(debouncedValue)
  const state = Object.entries(filteredData)
  // console.log(filteredData)
  // if (filteredData.item) {
  //   console.log(Object.entries(filteredData))
  // }
  // // const state = Object.entries(filterdData.items)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="homepage"
      style={{ display: navShown ? 'none' : 'block' }}
    >
      <div className="container">
        <Header setSearchParam={setSearchParam} />
        <section>
          {state.map(item => {
            return (
              <div key={nanoid()}>
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
