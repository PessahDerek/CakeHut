import React from 'react'
import './subcss.css'


function cakeItemInReceipt(props) {
  return (
    <div className='custom'>
      {props.order}
    </div>
  )
}

export default cakeItemInReceipt