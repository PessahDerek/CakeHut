import React from 'react'
import './componentstyle.css'
import offerCake from '../images/cheesecakePng.png'

function Offer() {
    var cakeOnOfferName = "Cheese Cake"
    var cakeOnOfferRealPrice = "1000/kg"
    var cakeOnOfferNewPrice = "800/kg"
  return (
    <div className='offer'>
        <h1>Enchantment on Offer</h1>
        <div className='offerBanner'>
            <img src={offerCake} />
            <div className='offerText'>
                <h2>{cakeOnOfferName}</h2>
                <span>was <strike><h2>{cakeOnOfferRealPrice}</h2></strike></span>
                <span>now goes for <h2>{cakeOnOfferNewPrice}</h2></span>
                <button >Grab deal</button>
            </div>
        </div>
    </div>
  )
}

export default Offer