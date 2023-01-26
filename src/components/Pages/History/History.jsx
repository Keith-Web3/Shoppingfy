import React from 'react'
import { nanoid } from 'nanoid'

import eventsData from '../../Data/PreviousEventsData'
import PreviousEvents from './PreviousEvents'
import '../../../sass/pages/history.scss'

function History() {
  const events = Object.entries(eventsData)
  console.log(events)
  return (
    <div className="history">
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
    </div>
  )
}

export default History
