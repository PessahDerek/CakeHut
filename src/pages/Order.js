import {React, useState, useEffect, useLayoutEffect} from 'react'
import Receipt from '../store/receipt.json'
import '../App.css'
import ReceiptWidget from '../components/ReceiptWidget'
import {MdClose} from 'react-icons/md'

function Order() {
    const [orders, setOrders] = useState([])
    var thisWidget = document.querySelector(".orderWidget")

    useLayoutEffect(() => {
        console.log(thisWidget)
      return () => {
        console.log(thisWidget)
      };
    }, [])

    const handleClick = (e) =>{
        try {
            thisWidget.style.opacity = '0'
            thisWidget.style.width = '0'
            thisWidget.style.marginleft = '-50%'
            thisWidget.style.height = '0'
        } catch (error) {
            thisWidget = e.target.parentNode.parentNode.parentNode;
            handleClick()
        }
    }
    
    return (
        <div className='orderWidget'>
            <nav><button onClick={handleClick}><MdClose /></button></nav>

            <div>
                <ReceiptWidget orderList={orders} />
            </div>
        </div>
    )
}

export default Order