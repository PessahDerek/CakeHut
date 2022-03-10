
import React from 'react'
import './componentStyle.css'


function Selections(props) {
  
  return (
    <div className="selections">
        <h2>{props.title}</h2>
        <div className="options">
            {props.options.map(
                option => <button onClick={()=>{
                  document.querySelector(option.link).scrollIntoView(
                    {behavior: 'smooth'}
                  )
                }} key={
                    props.options.indexOf(option)
                } >{option.name}</button>
            )}
        </div>
    </div>
  )
}

export default Selections
