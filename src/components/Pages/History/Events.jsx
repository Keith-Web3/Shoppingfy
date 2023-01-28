import React from 'react'

import '../../../sass/pages/events.scss'

function Events({ item, count }) {
  return (
    <div className="event">
      <p className="event__item">{item}</p>
      <p className="event__count">{count} pcs</p>
    </div>
  )
}

export default Events
