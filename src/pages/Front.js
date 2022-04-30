import React from 'react'
import './pagestyle.css'
import Headerimg from '../components/HeaderImg'
import Offer from '../components/Offer'
import Catalogue from '../components/Catalogue'

function Front() {
  return (
      <div className='front'>
        <Headerimg />
        <Offer />
        <Catalogue />
      </div>
    
  )
}

export default Front