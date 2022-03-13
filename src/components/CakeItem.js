import React from 'react'

function CakeItem(props) {
  return (
    <div className='cakeItem'>
        <div className="cakeImg">
            <img src={props.img} />
        </div>
        <div className="labelPart">
            <p> 500{props.price} </p>
            <button >Buy</button>
        </div>
    </div>
  )
}

export default CakeItem