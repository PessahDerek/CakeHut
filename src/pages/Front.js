import {React, useState, useEffect}from 'react'
import './pagestyle.css'
import Headerimg from '../components/HeaderImg'
import Offer from '../components/Offer'
import Catalogue from '../components/Catalogue'
import Basket from '../components/Basket'
import AfterSales from '../components/AfterSales'
import { actions } from '../store/store';
import thumbnail from '../images/thumbnail.png'

import Footer from '../components/Footer'
import axios from 'axios'
import { type } from '@testing-library/user-event/dist/type'

import {our_cakes, event_cakes} from '../images/cakes'
import Order from './Order'
import { Routes, Route, useNavigate } from 'react-router-dom'


function Front() {
  const [cartNum, setCartNum] = useState();
  function handleCart(value){
    setCartNum(value);
  }
  
  return (
      <div className='front'>
        <Headerimg />
        <Offer />
        <Catalogue title="Cakes in our Menu" cakelist={our_cakes}  mode="buy" />
        <Catalogue title="Cakes for your Events" cakelist={event_cakes} mode="quote" />
        <Basket/>
        <AfterSales />
        <Footer />
      </div>
    
  )
}

export default Front