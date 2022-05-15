import axios from 'axios';
import {React, useState} from 'react'
import './subcss.css'
const quoteURL = "https://cakemagic.herokuapp.com/app/getquote"

function QuoteForm(props) {
    const[quote, setQuote] = useState({cake: props.cake, customerName: "", customerContact: ""})
    const[message, setMessage] = useState("")
    const[notifShow, setNotifShow] = useState(false)
    const handleChange = (e, target) => {
        switch(target){
            case 'n': setQuote((setQuote)=>({...setQuote, customerName: e.target.value}));
                        break;
            case 'c': setQuote((setQuote)=>({...setQuote, customerContact: e.target.value}));
                        break;
            default: //
        }
    }
    const handleNotif = (message) =>{
        setMessage(message);
        console.log('works')
        setNotifShow(true)
        setTimeout(() => {
            setNotifShow(false)
        }, 2000);
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        try {
            axios
                .post(quoteURL, quote)
                .then((res)=>handleNotif(res.data))
                .catch(err=>{setMessage(err)})
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <form onSubmit={handleSubmit} className="quoteForm">
        {notifShow && <div className='quoteNotif'>{message}</div>}
        <div className='image'>
            <img src={props.image} alt="cake" />
        </div>
        <div>
            <h2>Hello, just Enter your Name, Email/ Phone Number and we'll reach out to you</h2>
            <input type="text" value={props.cake} readOnly />
            <input type='text' value={quote.customerName} onChange={(e)=>handleChange(e, 'n')} 
                placeholder="Your Name" required
            />
            <input type='text' value={quote.customerContact} onChange={(e)=>handleChange(e, 'c')} 
                placeholder="Email or Phone" required
            />
            <button type='submit'>Request Quote</button>
        </div>
    </form>
  )
}

export default QuoteForm