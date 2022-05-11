import React from 'react'
import './subcss.css'

function cakeItemInReceipt(props) {
  return (
    <div className='oneItem'>
      <div  className='img'>
        <img src={props.cakeImage} />
      </div>
      <div className='details'>
        <input type='text' readOnly value={props.cakeName} />
        <input type='number' readOnly value={props.cakePrice} />
      </div>
    </div>
  )
}

export default cakeItemInReceipt