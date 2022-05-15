import React from 'react'
import './componentstyle.css'
import deliv from '../images/deliv.png'

function AfterSales() {
  return (
    <div className='afterSales'>
        <img src={deliv} alt="free delivery" />
        <h1>Free Delivery</h1>
    </div>
  )
}

export default AfterSales