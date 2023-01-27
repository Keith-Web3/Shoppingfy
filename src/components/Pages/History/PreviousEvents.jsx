import React from 'react'
import PropTypes from 'prop-types'

import chevron from '../../../assets/chevron.svg'
import calender from '../../../assets/date.svg'
import '../../../sass/pages/previous_events.scss'

function PreviousEvents({ name, status, date, id, setClickedEvent }) {
  return (
    <div
      className="previous-events"
      onClick={e => {
        setClickedEvent([
          id,
          e.currentTarget.parentElement.firstElementChild.textContent,
        ])
      }}
    >
      <p className="name">{name}</p>
      <img src={calender} alt="calender" />
      <p className="date">{date}</p>
      <div className="status">
        <p className={`${status}`}>{status}</p>
      </div>
      <img src={chevron} alt="chevron" />
    </div>
  )
}

PreviousEvents.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
}

export default PreviousEvents
