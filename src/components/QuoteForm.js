import axios from 'axios';
import {React, useState} from 'react'
import './subcss.css'
import apis from '../apis';
const quoteURL = "https://cakemagic.herokuapp.com/app/getquote"

function QuoteForm(props) {
    const[quoteReq, setQuote] = useState({cake: props.name, customerName: "", customerContact: ""});

    const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            await axios.post(apis().requestQuote, quoteReq)
            .then((res)=>alert(res.data));
        } catch (error) {
            alert(error.message);
        }
    }
    
    return (
        <div className='orderForm'>
            <div className='image'>
                <img src={props.img} />
            </div>
            <form onSubmit={handleSubmit}>
                <p>Hello, Just Fill in your Name and Contacts and we'll reach out to You 🤗</p>
                <br></br>
                <input type='text' placeholder='Your Name' />
                <br/>
                <input type='text' placeholder='Phone/Email' />
                <br></br>
                <button type='submit'>Send Request</button>
            </form>
        </div>
    )
}

export default QuoteForm