import React from 'react'
import landingImg from '../images/cupcake.jpg'
import './componentstyle.css'
import {FaInstagram, FaPhone, FaTwitter} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {IoIosMail, IoLogoWhatsapp} from 'react-icons/io'

function HeaderImg() {
  return (
    <div className='headerImg'>
        <div className='image'>
            <img src={landingImg} />
            <div className='title'>
                <h1>Cake Magic</h1>
                <h2>incantare la vita</h2>
            </div>
            
            <nav className='contacts'>
                <FaPhone className='contIcon' />
                <IoLogoWhatsapp className='contIcon' />
                <AiFillInstagram className='contIcon' />
                <FaTwitter className='contIcon' />
                <IoIosMail className='contIcon' />
            </nav>
        </div>
    </div>
  )
}

export default HeaderImg