import React from 'react'
import { nanoid } from 'nanoid'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'

import eventsData from '../../Data/PreviousEventsData'
import PreviousEvents from './PreviousEvents'
import '../../../sass/pages/history.scss'

function History({ navShown, setClickedEvent }) {
  const events = Object.entries(eventsData)
  const state = useSelector(state => Object.entries(state.events))
  const state1 = useSelector(state => state.events)
  console.log(state1)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="history"
      style={{ display: navShown ? 'none' : 'block' }}
    >
      <div className="container">
        <h2>Shopping History</h2>
        {state.map(([name, event]) => {
          return (
            <div key={nanoid()}>
              <h3>{name}</h3>
              {event.map(el => (
                <PreviousEvents
                  setClickedEvent={setClickedEvent}
                  key={nanoid()}
                  {...el}
                />
              ))}
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default History
