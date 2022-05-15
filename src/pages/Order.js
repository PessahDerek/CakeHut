import {React, useState, useEffect} from 'react'
import '../App.css'
import ReceiptWidget from '../components/ReceiptWidget'
import {MdClose} from 'react-icons/md'
import CustomQuote from '../components/CustomQuote'

function Order(props) {
    const [buy, setBuy] = useState({custom: false, buying: false})
    var thisWidget = document.querySelector(".orderWidget")
    
    useEffect(()=>{
        const orderObject = document.querySelector(".orderWidget")
        orderObject.style.opacity = '1'
        orderObject.style.left = '5%'
        orderObject.style.width = "90%"
        orderObject.style.height = '80vh'
        if (props.mode === 'buy'){
            setBuy(setBuy=>({...setBuy, buying: true}))
        } else {
            setBuy(setBuy=>({...setBuy, custom: true}))
        }
    }, [props.mode])

    const handleExit = (e) =>{
        try {
            thisWidget.style.opacity = '0'
            thisWidget.style.width = '0'
            thisWidget.style.marginleft = '-50%'
            thisWidget.style.height = '0'
            props.func()
            setBuy({custom: false, buying: false })
        } catch (error) {
            thisWidget = e.target.parentNode.parentNode.parentNode;
            handleExit()
        }
    }
    
    return (
        <div className='orderWidget'>
            <nav><button onClick={handleExit}><MdClose /></button></nav>

            <div>
                {buy.buying && <ReceiptWidget orderList={props.order} />}
                {buy.custom && <CustomQuote order={props.order} />}
            </div>
        </div>
    )
}

export default Order