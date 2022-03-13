import React from 'react'
import CakeItem from './CakeItem'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


function CakeTray(props) {
    var list = props.cake;
    return (
        <div className="cakeTray">
            <div className="title"><h1>{props.title}</h1></div>
            <div className='cakeList'>
                <Carousel showThumbs={false}>
                    {list.map((aCake) => <CakeItem key={props.cake.indexOf(aCake)} img={aCake} />)}
                </Carousel>
            </div>
        </div>
  )
}

export default CakeTray