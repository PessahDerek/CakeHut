import {React} from 'react'
import './subcss.css'
import OrderForm from './OrderForm'

function ReceiptWidget(props) {
  return (
    <div className='oneItem'>
      <div  className='img'>
        <img src={props.orderList.cakeImage} alt="cake" />
      </div>
      <section className='details'>
        <OrderForm cake={props.orderList.cakeName} 
          price={props.orderList.cakePrice}
        />
      </section>
    </div>
  )
}

export default ReceiptWidget