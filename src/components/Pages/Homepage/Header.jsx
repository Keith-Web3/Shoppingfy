import React from 'react'
import { useId } from 'react'

import searchIcon from '../../../assets/search.svg'
import '../../../sass/pages/header.scss'

function Header() {
  const id = useId()

  return (
    <header className="header">
      <p>
        <span>Shoppingfy </span>allows you take your shopping list wherever you
        go
      </p>
      <label htmlFor={id}>
        <img src={searchIcon} alt="search" />
        <input type="text" id={id} placeholder="search item" />
      </label>
    </header>
  )
}

export default Header
