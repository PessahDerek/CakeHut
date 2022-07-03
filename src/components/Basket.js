import {React, useState, useEffect}from 'react'
import './subcss.css'
import {GiBasket} from 'react-icons/gi'
import { useSelector} from 'react-redux';

function Basket(props) {
    const cartSize = useSelector((state)=> state.order);
    const orderObject = document.querySelector(".orderWidget")
    const  handleClick = () =>{
      try {
        orderObject.style.opacity = '1'
        orderObject.style.left = '5%'
        orderObject.style.width = "90%"
        orderObject.style.height = '80vh'
      } catch (error) {
        alert("Add Product to Basket")
      }
      
    }
  return (
    <div className='cartStyle'>
        <GiBasket onClick={handleClick} className='gibasket' />
        <h3>{cartSize}</h3>
    </div>
  )
}

export default Basket
