
import React from 'react'
import './componentStyle.css'


function Selections(props) {
  
  return (
    <div className="selections">
        <h2>{props.title}</h2>
        <div className="options">
            {props.options.map(
                option => <button key={props.options.indexOf(option)} onClick={option.func}>{option.name}</button>
            )}
        </div>
    </div>
  )
}

export default Selections
