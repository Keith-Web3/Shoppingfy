import React, { useId, useRef } from 'react'
import { nanoid } from 'nanoid'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import actions from '../Store/index'
import bottle from '../../assets/source.svg'
import shopper from '../../assets/shopping_app.svg'
import Button from '../UI/Button'
import pen from '../../assets/pen-solid.svg'
import '../../sass/sub-components/shopping_list.scss'
import Items from './Items'

function ShoppingList({
  navShown,
  setAsideState,
  clickedEvent,
  setClickedEvent,
}) {
  const id = useId()
  const navigate = useNavigate()
  const inputRef = useRef()
  const dispatch = useDispatch()

  const state = useSelector(state => Object.entries(state.items))
  const cartIsEmpty = state.every(el => el[1].every(item => item.count === 0))

  const submitHandler = function () {
    if (cartIsEmpty) return
    if (inputRef.current.value.trim()) {
      const date = new Date()
      const day = new Intl.DateTimeFormat(['en', 'GB']).format(date).split('/')
      const [week, , monthL] = new Intl.DateTimeFormat('en-GB', {
        weekday: 'short',
        month: 'long',
      })
        .format(date)
        .split(' ')

      dispatch(
        actions.events.addEvent({
          day: `${week} ${day.join('.')}`,
          state: 'pending',
          name: inputRef.current.value,
          date: `${monthL.slice(0, -1)} ${day[2]}`,
          id: Date.now(),
        })
      )
      navigate('/history')
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ type: 'tween', duration: 0.25 }}
      className="shopping_list"
      style={{ display: navShown ? 'block' : 'none' }}
    >
      <div className="container">
        <div className="hero">
          <img src={bottle} alt="add-item" />
          <div>
            <p>Didn’t find what you need?</p>
            <Button onClick={() => setAsideState('add')}>Add Item</Button>
          </div>
        </div>
        {cartIsEmpty && <p className="no-items">No items</p>}
        <div className="container">
          <div className="heading">
            <p>Shopping list</p>
            <img src={pen} alt="add-item" />
          </div>
          {state.map(item => {
            return (
              <div key={nanoid()} className="items-container">
                <h3>{item[0]}</h3>
                {item[1].map(item => {
                  if (item.count === 0) return
                  return (
                    <Items
                      key={nanoid()}
                      item={item.item}
                      itemCount={item.count}
                      selected={item.checked}
                      toggleSelect={item.checkToggle}
                    />
                  )
                })}
              </div>
            )
          })}
        </div>
        <div className={`input ${cartIsEmpty ? 'empty' : ''}`}>
          {cartIsEmpty && <img src={shopper} alt="shopper" />}
          {!clickedEvent.length ? (
            <label htmlFor={id}>
              <input
                type="text"
                id={id}
                placeholder="Enter a name"
                ref={inputRef}
                disabled={cartIsEmpty}
              />
              <Button
                onClick={submitHandler}
                style={{
                  bg: cartIsEmpty ? '#C1C1C4' : '#F9A109',
                  color: '#FFFFFF',
                }}
              >
                Save
              </Button>
            </label>
          ) : (
            <label htmlFor={`a${id}`} className="btn-container">
              <Button
                onClick={() => {
                  dispatch(
                    actions.events.editStatus({
                      id: clickedEvent[0],
                      status: 'cancelled',
                      date: clickedEvent[1],
                    })
                  )
                  setClickedEvent([])
                }}
              >
                cancel
              </Button>
              <Button
                onClick={() => {
                  dispatch(
                    actions.events.editStatus({
                      id: clickedEvent[0],
                      status: 'completed',
                      date: clickedEvent[1],
                    })
                  )
                  setClickedEvent([])
                }}
                style={{ bg: '#56CCF2', color: '#fff' }}
              >
                Complete
              </Button>
            </label>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ShoppingList
