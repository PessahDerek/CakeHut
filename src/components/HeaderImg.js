import React from 'react'
import landingImg from '../images/cupcake.jpg'
import './componentstyle.css'


function HeaderImg() {
  return (
    <div className='headerImg'>
        <div className='image'>
            <img src={landingImg} />
            <div className='title'>
                <h1>Cake Magic</h1>
                <h2>incantare la vita</h2>
            </div>
            
        </div>
    </div>
  )
}

export default HeaderImg