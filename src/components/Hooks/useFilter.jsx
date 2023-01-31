import React, { useState } from 'react'
import { useSelector } from 'react-redux'

function useFilter(param) {
  const state = useSelector(state => state.items)
  const filtered = { ...state }

  for (const item in filtered) {
    filtered[item] = filtered[item].filter(item =>
      item.item.toLowerCase().trim().includes(param.toLowerCase())
    )
  }

  return [filtered]
}

export default useFilter
