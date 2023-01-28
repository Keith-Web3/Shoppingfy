import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import { nanoid } from 'nanoid'

import { database } from '../../Data/firebase'
import Events from './Events'
import '../../../sass/pages/event_info.scss'
import calender from '../../../assets/date.svg'
import arrow from '../../../assets/arrow-left.svg'

let events
function EventInfo() {
  const params = useParams()
  const navigate = useNavigate()
  const [retrievedDoc, setRetrievedDoc] = useState()

  useEffect(() => {
    ;(async () => {
      const docRef = doc(database, 'selectedItems', `${params.id.slice(1)}`)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()) {
        events = Object.entries(docSnap.data()).filter(
          item => !['name', 'day'].includes(item[0])
        )
        setRetrievedDoc(docSnap.data())
      } else {
        console.log('No such document!')
      }
    })()
  }, [])
  return (
    <div className="event-info">
      <div className="container">
        <div className="back-btn" onClick={() => navigate(-1)}>
          <img src={arrow} alt="back" />
          <p>back</p>
        </div>
        <h2>{retrievedDoc?.name}</h2>
        <div className="date">
          <img src={calender} alt="calender" />
          <p>{retrievedDoc?.day}</p>
        </div>
        <div className="events">
          {events?.map(item => {
            return (
              <div key={nanoid()}>
                <h3>{item[0]}</h3>
                {item[1].map(el => {
                  return <Events key={nanoid()} {...el} />
                })}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default EventInfo
