import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

import chevron from '../../../assets/chevron.svg'
import calender from '../../../assets/date.svg'
import '../../../sass/pages/previous_events.scss'

function PreviousEvents({ name, status, date, id, setClickedEvent }) {
  const navigate = useNavigate()

  return (
    <div
      className="previous-events"
      onClick={() => {
        navigate(`/history/:${id}`)
      }}
    >
      <p className="name">{name}</p>
      <img src={calender} alt="calender" />
      <p className="date">{date}</p>
      <div
        className="status"
        onClick={e => {
          e.stopPropagation()
          setClickedEvent([
            id,
            e.currentTarget.parentElement.parentElement.firstElementChild
              .textContent,
          ])
        }}
      >
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

// {
//   setClickedEvent([
//     id,
//     e.currentTarget.parentElement.firstElementChild.textContent,
//   ])
// }
