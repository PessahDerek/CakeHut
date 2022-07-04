import {React, useState, useEffect} from 'react'
import '../App.css'
import './pagestyle.css'
import ReceiptWidget from '../components/ReceiptWidget'
import {MdClose} from 'react-icons/md'
import CustomQuote from '../components/CustomQuote'
import {useLocation, useNavigate} from 'react-router-dom'
import OrderForm from '../components/OrderForm'
import QuoteForm from '../components/QuoteForm'
import Spinner from '../components/Spinner'

function Order(props) {
    const location = useLocation();
    const navigate = useNavigate();
    const [order, setOrder] = useState();
    const [show, setShow ] = useState(false)

    useEffect(()=>{
        if (location.state === null){
            navigate('/')
        }else{
            setOrder(location.state.details)
            console.log(order);
        }
    }, [])

    try {
        return(
            <div className='orderPage'>
                <nav><h2>Make Your {order.mode}</h2></nav>
                {order.mode === "buy" && <OrderForm 
                    img={order.cakeImage}
                    id={order.id}
                    name={order.cakeName}
                    price={order.cakePrice}
                />}
                {order.mode === "buy" && <p className='terms'>By Clicking Pay For Order, You consent to payment, you will recieve a payment prompt</p>}
                
                {order.mode === "quote" && <QuoteForm  
                    img={order.cakeImage}
                    name={order.cakeName}
                />}
            </div>
        )
    } catch (error) {
        console.log('hello')
        return( <Spinner />)
    }
}

export default Order