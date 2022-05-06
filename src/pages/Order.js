import {React, useState} from 'react'
import Receipt from '../store/receipt.json'
import '../App.css'

function Order() {
    const [order, setOrder] = useState({"caketype": Receipt.basket[0].cake, "cakeprice": Receipt.basket[0].price, "phone": "", "location": "", 
    "pickOrDel": "", 'delivDate': ''});
    const [dateInp, setDateInp] = useState("text")
    const handleChange = (event) => {
        switch(event.target.type){
            case 'tel': setOrder({...order, phone: event.target.value, ...order});
            case 'text': setOrder({...order, location: event.target.value, ...order});
            case 'del': setOrder({...order, pickOrDel: event.target.value, ...order})
            case 'date': setOrder({...order, delivDate: event.target.value})
        }
    }
    // fetch locations served
    const handleSubmit = () => {
        //
    }

    const orderForm = (
        <form className="orderForm" onSubmit={handleSubmit}>
            <div className='orderImg'>
                <img src={Receipt.basket[0].img} />
            </div>
            <div className='orderDetails'>
                <input type='text' value={order.caketype} readOnly />
                <input type='number' value={order.price} readOnly/>
                <input type='tel' value={order.phone} placeholder='Phone Number' required 
                    onChange />
                <input type='text' value={order.location} placeholder='location' list='{locations}' 
                    onChange
                />
                <select value={order.pickOrDel}>
                    <option onClick value='Delivered'>Delivered</option>
                    <option onClick value='Pick Up'>Pick Up</option>
                </select>
                <input type={dateInp} placeholder="Due Date" />
            </div>
        </form>
    )
  return (
    <div className='orderPage'>
        {orderForm}
    </div>
  )
}

export default Order