import {React, useState, useEffect} from 'react'
import '../App.css'
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
            console.log(order)
        }
    }, [])

    try {
        return(
            <>
                {order.mode === "buy" && <OrderForm 
                    img={order.cakeImage}
                    id={order.id}
                    name={order.cakeName}
                    price={order.cakePrice}
                />}
                {order.mode === "quote" && <QuoteForm />}
            </>
        )
    } catch (error) {
        console.log('hello')
        return( <Spinner />)
    }
}

export default Order