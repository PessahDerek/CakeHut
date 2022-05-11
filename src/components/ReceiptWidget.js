import {React, useState, useEffect} from 'react'
import './subcss.css'
import CakeItemInReceipt from './CakeItemInReceipt'

function ReceiptWidget(props) {
  const [cakes, setCakes] = useState([{}, {}])

  return (
    <div className='receiptObject'>
      {cakes.map((cake)=> <CakeItemInReceipt 
        key={cake.id}
        cakeName={cake.cakeName}
        cakePrice={cake.cakePrice}
        cakeImage={cake.cakeImage}
      />)}
    </div>
  )
}

export default ReceiptWidget