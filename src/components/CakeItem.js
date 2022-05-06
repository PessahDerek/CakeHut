import {React, useState} from 'react'
import './subcss.css'
import {BsCheckCircle} from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux';
import { actions } from '../store/store';
import Receipt from '../store/receipt.json'
import { act } from 'react-dom/test-utils';

// maintain as global


function CakeItem(props) {
  const [buyButtonTxt, setbuyButtonTxt] = useState("Add to Basket")
  const [btnClicked, setBtnClicked] = useState(false)
  const dispatch = useDispatch()
  const selector = useSelector((state)=> state.order)
  const id = props.cakeName + String(props.price)

  function handleAddtoCart(){
    if (!btnClicked){
      setbuyButtonTxt(<p>Added <BsCheckCircle /></p>)
      dispatch(actions.increment(
        {id: id, cake: props.cakeName, price: props.price, img: props.img}
      ))
      setBtnClicked(true)
    } else {
      setbuyButtonTxt("Add to Basket")
      dispatch(actions.decrement(id))
      setBtnClicked(false)
    }
  }
  function handleGetQuote(){
    //
  }
  const addtoCart = <button onClick={handleAddtoCart} >{buyButtonTxt}</button>
  const getQuote = <button onClick={handleGetQuote} >Get Quote</button>
  const buttonMode = () =>{
    if (props.mode == 'buy'){
      return addtoCart
    } else {
      return getQuote
    }
  }
  return (
    <div className='cakeItem'>
        <div className='cakeImg' >
            <img src={props.img}/>
        </div>
        <div>
            <h3>{props.cakeName}</h3>
            <h3>Ksh{props.price}</h3>
            {buttonMode()}
        </div>
        
    </div>
  )
}

export default CakeItem