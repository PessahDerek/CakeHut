import {React, useState, useEffect}from 'react'
import './pagestyle.css'
import Headerimg from '../components/HeaderImg'
import Offer from '../components/Offer'
import Catalogue from '../components/Catalogue'
import Basket from '../components/Basket'
import AfterSales from '../components/AfterSales'
import { actions } from '../store/store';

import Cheesecake from '../images/cheesecakePng.png'
import Fruitcake from '../images/fruitcakePng.png'
import Cupcake from '../images/pexels-jess-png.png'
import Spongecake from '../images/spongecake.jpg'

import birthday from '../images/birthdayPng.png'
import wedding from '../images/weddingPng.png'
import anniversary from '../images/anniversaryPng.png'
import graduation from '../images/graduationPng.png'
import Footer from '../components/Footer'

var cakes = [
  {cake: "Cheese Cake", price: 800, img: Cheesecake},
  {cake: "Fruit Cake", price: 1000, img: Fruitcake},
  {cake: "Sponge Cake", price: 800, img: Spongecake},
  {cake: "Cup Cake", price: 800, img: Cupcake},
]

var eventCakes = [
  {cake: "Birthday", price: "Varies", img: birthday},
  {cake: "Wedding", price: "Varies", img: wedding},
  {cake: "Anniversary", price: "Varies", img: anniversary},
  {cake: "Graduation", price: "Varies", img: graduation},
]
function Front() {
  const [cartNum, setCartNum] = useState();
  function handleCart(value){
    setCartNum(value)
    console.log("Huuh")
  }
  return (
      <div className='front'>
        <Headerimg />
        <Offer />
        <Catalogue title="Cakes in our Menu" cakelist={cakes} mode="buy" />
        <Catalogue title="Cakes for your Events" cakelist={eventCakes} mode="quote" />
        <Basket/>
        <AfterSales />
        <Footer />
      </div>
    
  )
}

export default Front