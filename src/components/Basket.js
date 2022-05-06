import {React, useState, useEffect}from 'react'
import './subcss.css'
import {GiBasket} from 'react-icons/gi'
import { useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom'

function Basket(props) {
    const cartSize = useSelector((state)=> state.order);
    const navigate = useNavigate()
    const  handleClick = () =>{
        navigate('/order')
    }
  return (
    <div className='cartStyle'>
        <GiBasket onClick={handleClick} className='gibasket' />
        <h3>{cartSize}</h3>
    </div>
  )
}

export default Basket
