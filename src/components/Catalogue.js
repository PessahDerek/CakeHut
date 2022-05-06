import React from 'react'
import './componentstyle.css'
import CakeItem from './CakeItem'
import Cheesecake from '../images/cheesecakePng.png'
import Fruitcake from '../images/fruitcakePng.png'
import Cupcake from '../images/pexels-jess-png.png'
import Spongecake from '../images/spongecake.jpg'


function Catalogue(props) {
    const cakes = props.cakelist
  return (
    <div className='catalogue'>
        <h1>{props.title}</h1>
        <div className='catalist'>
            {cakes.map(cake => <CakeItem key={cakes.indexOf(cake)} 
              cakeName={cake.cake}
              price={cake.price}
              img={cake.img}
              mode={props.mode}
            />)}
        </div>
    </div>
  )
}

export default Catalogue