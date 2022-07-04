import {React, useState} from 'react'
import './subcss.css'
import axios from 'axios'

function OrderForm(props) {
    const [cake, setCake] = useState({
        cakeName: props.name,
        price: props.price,
        flavor: "",
        quantity: "1Kg",
        deliv: true,
        date: "When Do You Want It?",
        description: "",
        buyerName: "",
        buyerLoc: "",
        buyerPhone: ""
    })
    const [type, setType] = useState('text');
    const takeInput = (e, target) =>{
        switch(target){
            case 'f': {
                setCake(prev=>({...prev, flavor: e.target.value}));
            }break;
            case 'q': {
                setCake(prev=>({...prev, quantity:e.target.value}));
            }break;
            case 'd': {
                setCake(prev=>({...prev, deliv: e.target.value}));
            }break;
            case 't': {
                setCake(prev=>({...prev, date: e.target.value}));
            }break;
            case 's': {
                setCake(prev=>({...prev, description: e.target.value}));
            }break;
            case 'n': {
                setCake(prev=>({...prev, buyerName: e.target.value}));
            }break;
            case 'l': {
                setCake(prev=>({...prev, buyerLoc: e.target.value}));
            }break;
            case 'p': {
                setCake(prev=>({...prev, buyerPhone: e.target.value}));
            }break;
        }
    } 
    return (
        <div className='orderForm'>
            <div className='image'>
                <img src={props.img} alt="cake" />
            </div>
            <form>
            <div>
                <label>Cake Details</label>
                <input type="text" value={props.name} readOnly />
                <input type="text" value={"Ksh." + props.price} readOnly />
                <input type="text" value={cake.flavor} list="flavors" placeholder="Select a Flavor" onChange={(e)=>takeInput(e, 'f')} />
                <datalist id="Flavor">
                    <option value="Vanilla">Vanilla</option>
                    <option value="Chocolate">Chocolate</option>
                    <option value="Mint" >Mint</option>
                    <option value="Cherry" >Cherry</option>
                </datalist>
                <textarea value={cake.description} placeholder='Any Extra Instructions?' 
                onChange={(e)=>takeInput(e, 's')}>
                    
                </textarea>
            </div>
            <div>
                <label>Your Details</label>
                {/**user details start from here */}
                <input type="text" value={cake.buyerName} placeholder="Your Name" onChange={
                    (e)=>takeInput(e, 'n')
                }/>
                <input type="tel" value={cake.buyerPhone} placeholder="Your Phone Number" onChange={
                    (e)=>takeInput(e, 'p')
                }/>
                <select value={cake.deliv} onChange={(e)=>takeInput(e, 'd')}>
                    <option value={true} >Have it delivered to me</option>
                    <option value={false}>I'll Pick it</option>
                </select>
                <input type={type} value={cake.date} placeholder="When Do You want It?" onChange={
                    (e)=>takeInput(e, 't')
                } onClick={()=>setType('date')}/>
            <button >Pay for Order</button>
            </div>
            </form>
        </div>
    )
}

export default OrderForm