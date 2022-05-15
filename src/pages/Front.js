import {React, useState}from 'react'
import './pagestyle.css'
import Headerimg from '../components/HeaderImg'
import Offer from '../components/Offer'
import Catalogue from '../components/Catalogue'
import AfterSales from '../components/AfterSales'
import Footer from '../components/Footer'
import {our_cakes, event_cakes} from '../images/cakes'
import Order from './Order'


function Front() {
  const [isOrder, setIsOrder] = useState(false);
  const [order, setOrder] = useState([])
  const [orderMode, setOrderMode] = useState()
  

  function handleHide(content, mode){
    setOrderMode(mode)
    setOrder(content)
    setIsOrder(!isOrder)
  }
  
  return (
      <div className='front'>
        <Headerimg />
        <Offer />
        <Catalogue func={handleHide} title="Cakes in our Menu" cakelist={our_cakes}  mode="buy" />
        <Catalogue func={handleHide} title="Cakes for your Events" cakelist={event_cakes} mode="quote" />
        {isOrder && <Order order={order} func={handleHide} mode={orderMode} />}
        <AfterSales />
        <Footer />
      </div>
    
  )
}

export default Front