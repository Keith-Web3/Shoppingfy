import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import logo from '../../assets/logo.svg'
import cart from '../../assets/cart.svg'
import list from '../../assets/list.svg'
import poll from '../../assets/poll.svg'
import rotate from '../../assets/rotate.svg'
import '../../sass/sub-components/navbar.scss'

function NavBar({ setNavShown }) {
  const cartCount = useSelector(state => {
    const entries = Object.entries(state.items)
    return entries.filter(el => el[1].some(items => items.count !== 0)).length
  })
  return (
    <nav className="navigation">
      <img src={logo} alt="logo" className="logo" />
      <div className="pages">
        <Link to="/">
          <img src={list} alt="list" title="items" />
        </Link>
        <Link to="/history">
          <img src={rotate} alt="history" title="history" />
        </Link>
        <Link to="/statistics">
          <img src={poll} alt="statistics" title="statistics" />
        </Link>
      </div>
      <div className="cart" onClick={() => setNavShown(prev => !prev)}>
        <p>{cartCount}</p>
        <img src={cart} alt="cart" className="cart__img" />
      </div>
    </nav>
  )
}

export default NavBar
