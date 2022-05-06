import React from 'react'
import './componentstyle.css'
import onway from '../images/ontheway.svg'
import deliv from '../images/deliv.png'

function AfterSales() {
  return (
    <div className='afterSales'>
        <img src={deliv} />
        <h1>Free Delivery</h1>
    </div>
  )
}

export default AfterSales