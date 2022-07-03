import {React} from 'react'
import './subcss.css'
import QuoteForm from './QuoteForm';
import {useNavigate} from 'react-router-dom'

function CakeItem(props) {
  const id = props.cakeName + String(props.price)
  const navigate = useNavigate()

  // open order page with cake details
  const handleAddtoCart = () =>{
      var cakeDetails = {id: id, cakeName: props.cakeName, cakePrice: props.price, cakeImage: props.img, mode: props.mode}
      navigate("/order", {state: {details: cakeDetails}})
  };
  // open order page with requesting details
  function handleGetQuote(){
      var requstDetls = { cakeName: props.cakeName, cakeImage: props.img, mode: props.mode}
      navigate("/order", {state: {details: requstDetls}});
  }
  const addtoCart = <button onClick={handleAddtoCart} >Order</button>
  const getQuote = <button onClick={handleGetQuote} >Get Quote</button>
  
  const buttonMode = () =>{
    // mode comes from catalogue parent
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