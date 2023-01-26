import React from 'react'
import { PropTypes } from 'prop-types'

import '../../../sass/pages/item_statistics.scss'

function ItemsStatistics({ name, percentage, color }) {
  return (
    <div className="item-statistics">
      <p className="name">{name}</p>
      <p className="percentage">{percentage}%</p>
      <div
        className="progress"
        style={{
          backgroundImage: `linear-gradient(to right, ${color} ${percentage}%, #E0E0E0 ${percentage}%)`,
        }}
      ></div>
    </div>
  )
}

ItemsStatistics.proptypes = {
  name: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
}

export default ItemsStatistics
