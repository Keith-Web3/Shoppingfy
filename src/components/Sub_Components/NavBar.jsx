import React, { useState } from 'react'

import logo from '../../assets/logo.svg'
import cart from '../../assets/cart.svg'
import list from '../../assets/list.svg'
import poll from '../../assets/poll.svg'
import rotate from '../../assets/rotate.svg'
import '../../sass/sub-components/navbar.scss'

function NavBar({ setNavShown }) {
  const [cartCount, setCartCount] = useState(3)
  return (
    <nav className="navigation">
      <img src={logo} alt="logo" className="logo" />
      <div className="pages">
        <img src={list} alt="list" title="items" />
        <img src={rotate} alt="history" title="history" />
        <img src={poll} alt="statistics" title="statistics" />
      </div>
      <div className="cart" onClick={() => setNavShown(prev => !prev)}>
        <p>{cartCount}</p>
        <img src={cart} alt="cart" className="cart__img" />
      </div>
    </nav>
  )
}

export default NavBar
