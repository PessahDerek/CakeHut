import {React, useState} from 'react'
import './subcss.css'
import axios from 'axios'

function OrderForm(props) {
    const [orderDetails, setDetails] = useState({
        cake: props.cake,
        price: props.price,
        name: "",
        phone: "",
        deliv: "Deliver",
        expecDate: "k",
        location: "",
        extraInfo: "",
    })

    const handleInput = (e, target) =>{
        switch(target){
            case 'n': setDetails(setDetails=>({...setDetails, name: e.target.value}));
                    break;
            case 'p': setDetails(setDetails=>({...setDetails, phone: e.target.value}));
                    break;
            case 'd': setDetails(setDetails=>({...setDetails, deliv: e.target.value}));
                    break;
            case 'e': setDetails(setDetails=>({...setDetails, expecDate: e.target.value}));
                    break;
            case 'l': setDetails(setDetails=>({...setDetails, location: e.target.value}));
                    break;
            case 'x': setDetails(setDetails=>({...setDetails, extraInfo: e.target.value}));
                    break;
        }
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        axios  
            .post("https://cakemagic.herokuapp.com/app/placeorder", orderDetails)
            .then(res => alert(res.data))
            .catch(err => console.log(err))
    }
  return (
    <form onSubmit={handleSubmit}>
        <label>Cake Details</label>
        <input type='text' readOnly value={orderDetails.cake} />
        <input type='text' readOnly value={orderDetails.price} />
        <input type='text' value={orderDetails.deliv} list="delivered" placeholder='Deliver' 
            onChange={(e)=>handleInput(e, 'd')}
        />
            <datalist id='delivered'>
                <option value="Deliver" />
                <option value='Pickup' />
            </datalist>
        <input type='text' placeholder='location' value={orderDetails.location} 
            onChange={(e)=>handleInput(e, 'l')}
        />
        <input type='date' placeholder="Delivery Date" value={orderDetails.expecDate} 
            onChange={(e)=>handleInput(e, 'e')}
        />
        <textarea placeholder='Enter extra details' value={orderDetails.extraInfo} 
            onChange={(e)=>handleInput(e, 'x')}
        />
        <label>Your Details</label>
        <input type='text' value={orderDetails.name} placeholder="Your Name" 
            onChange={(e)=>handleInput(e, 'n')}
        />
        <input type='text' value={orderDetails.phone} placeholder="Phone Number" 
            onChange={(e)=>handleInput(e, 'p')}
        />
        <p>When you click on Order button below, you consent to buy,
            you will be redirected to mpesa, enter pin to pay 
            and you can download your receipt</p>
        <button type='submit'>Order for {props.cake}</button>
    </form>
  )
}

export default OrderForm