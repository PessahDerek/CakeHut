import {React, useEffect, useState} from 'react'
import './componentstyle.css'
import CakeItem from './CakeItem'


function Catalogue(props) {
  const [cakes, setCakes] = useState(props.cakelist)
  useEffect(()=>{
    setCakes(props.cakelist)
  }, [props])
  return (
    <div className='catalogue'>
        <h1>{props.title}</h1>
        <div className='catalist'>
            {cakes.map(cake => <CakeItem key={cakes.indexOf(cake)} 
              cakeName={cake.cakeName}
              price={cake.cakePrice}
              img={cake.cakeImage}
              mode={props.mode}
            />)}
        </div>
    </div>
  )
}

export default Catalogue