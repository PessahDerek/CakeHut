import React from 'react'
import {FaPhone, FaTwitter} from 'react-icons/fa'
import {AiFillInstagram} from 'react-icons/ai'
import {IoIosMail, IoLogoWhatsapp} from 'react-icons/io'

function Footer() {
  return (
    <footer>
        <FaPhone className='contIcon' />
        <IoLogoWhatsapp className='contIcon' />
        <AiFillInstagram className='contIcon' />
        <FaTwitter className='contIcon' />
        <IoIosMail className='contIcon' />
    </footer>
  )
}

export default Footer