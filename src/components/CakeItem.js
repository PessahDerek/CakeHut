import {React} from 'react'
import './subcss.css'
import QuoteForm from './QuoteForm';

function CakeItem(props) {
  const id = props.cakeName + String(props.price)
  const handleAddtoCart = () =>{
      props.func({id: id, cakeName: props.cakeName, cakePrice: props.price, cakeImage: props.img}, props.mode)
  };
  function handleGetQuote(){
    props.func(<QuoteForm cake={props.cakeName} image={props.img} />, props.mode)
  }
  const addtoCart = <button onClick={handleAddtoCart} >Order</button>
  const getQuote = <button onClick={handleGetQuote} >Get Quote</button>
  
  const buttonMode = () =>{
    if (props.mode === 'buy'){
      return addtoCart
    } else {
      return getQuote
    }
  }
  
  return (
    <div className='cakeItem'>
        <div className='cakeImg' >
            <img src={props.img} alt="cake" />
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