import React from 'react'
import { Line } from 'react-chartjs-2'
import { motion } from 'framer-motion'
import { Chart as ChartJS } from 'chart.js/auto'

import ItemsStatistics from './ItemsStatistics'
import '../../../sass/pages/statistics.scss'

const DUMMY_CHART_DATA = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Summary',
      data: [144, 52, 34, 65, 31, 18, 38],
      borderColor: '#F9A109',
    },
  ],
}

function Statistics({ navShown }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="statistics"
      style={{ display: navShown ? 'none' : 'block' }}
    >
      <div className="container">
        <div className="top-container">
          <div className="top top-items">
            <h3>Top items</h3>
            <ItemsStatistics name="Banana" color="#F9A109" percentage={12} />
            <ItemsStatistics name="Rice" color="#F9A109" percentage={10} />
            <ItemsStatistics
              name="Chicken 1kg"
              color="#F9A109"
              percentage={8}
            />
          </div>
          <div className="top top-categories">
            <h3>Top Categories</h3>
            <ItemsStatistics
              name="Fruits and vegetables"
              color="#56CCF2"
              percentage={23}
            />
            <ItemsStatistics
              name="Meat and Fish"
              color="#56CCF2"
              percentage={14}
            />
            <ItemsStatistics name="Pets" color="#56CCF2" percentage={11} />
          </div>
        </div>
        <div className="chart">
          <h3>Monthly Summary</h3>
          <Line data={DUMMY_CHART_DATA} />
        </div>
      </div>
    </motion.div>
  )
}

export default Statistics
