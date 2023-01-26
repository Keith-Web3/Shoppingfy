import React from 'react'
import { nanoid } from 'nanoid'
import { motion } from 'framer-motion'

import eventsData from '../../Data/PreviousEventsData'
import PreviousEvents from './PreviousEvents'
import '../../../sass/pages/history.scss'

function History({ navShown }) {
  const events = Object.entries(eventsData)
  console.log(events)
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // transition={{ type: 'tween', duration: 0.25 }}
      className="history"
      style={{ display: navShown ? 'none' : 'block' }}
    >
      <div className="container">
        <h2>Shopping History</h2>
        {events.map(([name, event]) => {
          return (
            <div key={nanoid()}>
              <h3>{name}</h3>
              {event.map(el => (
                <PreviousEvents key={nanoid()} {...el} />
              ))}
            </div>
          )
        })}
      </div>
    </motion.div>
  )
}

export default History
