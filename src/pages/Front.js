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
  // write fetch cake function in useEffect and splash screen
  return (
      <div className='front'>
        <Headerimg />
        <Offer />
        <Catalogue title="Cakes in our Menu" cakelist={our_cakes}  mode="buy" />
        <Catalogue title="Cakes for your Events" cakelist={event_cakes} mode="quote" />
        <AfterSales />
        <Footer />
      </div>
    
  )
}

export default Front