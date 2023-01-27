import React from 'react'
import { nanoid } from 'nanoid'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'

import video from '../../../assets/video.mp4'
import PreviousEvents from './PreviousEvents'
import '../../../sass/pages/history.scss'

function History({ navShown, setClickedEvent }) {
  const state = useSelector(state => Object.entries(state.events))

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
        <div className="video-container">
          <p>How to add events to history</p>
          <video src={video} controls />
        </div>
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
