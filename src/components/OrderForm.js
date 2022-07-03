import {React, useState} from 'react'
import './subcss.css'
import axios from 'axios'

function OrderForm(props) {
    const [cake, setCake] = useState({
        cakeName: props.name,
        price: props.price,
        flavor: "Vanilla",
        quantity: "1Kg",
        deliv: true,
        date: "",
        description: "",
        buyerName: "",
        buyerLoc: "",
        buyerPhone: ""
    })
    return (
        <div className='orderForm'>
            <div className='image'>
                <img src={props.img} alt="cake" />
            </div>
            <form>
                <input type="text" value={props.name} readOnly />
                <input type="text" value={"Ksh." + props.price} readOnly />
                <input type="text" value={cake.flavor} list="flavors" placeholder="Flavor" />
                <datalist id="flavours">
                    <option value="Vanilla" />
                    <option value="Chocolate" />
                    <option value="Mint" />
                    <option value="Cherry" />
                </datalist>
                <select value={cake.deliv} >
                    <option value={true} >Have it delivered to me</option>
                    <option value={false}>I'll Pick it</option>
                </select>
                <input type='date' value={cake.date} placeholder="When Do You want It?" />
                <textarea value={cake.description} placeholder='Any Extra Instructions?'>
                    
                </textarea>
                {/**user details start from here */}
                <input type="text" value={cake.buyerName} placeholder="Your Name" />
                <input type="tel" value={cake.buyerPhone} placeholder="Your Phone Number" />
            </form>
        </div>
    )
}

export default OrderForm