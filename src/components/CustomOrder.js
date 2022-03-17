import React from 'react'
import RegularOrder from './RegularOrder'

function CustomOrder(props) {
    var inputs = [
        <input key="1" type="text" placeholder="Flavour" />,
        <input key="2" type="text" placeholder="text to write" />,
        <input key="3" type="text" placeholder="Cake Outter Colour" />,
        <input key="4" type="text" placeholder="Inner Colour" />,
        ]
    return (
        <div className="orderForms" id='orderForms'>
            <div className="cakeImage">
                <div className="selectImg">
                    <img src={props.cakeImg} alt="selected Img" />
                </div>
                <button >Customize</button>
            </div>
            <form noValidate>
                <input type='number' placeholder='weight' />
                <select id='egg'>
                    <option value="withEgg">With Egg</option>
                    <option value="withoutEgg">Without Egg</option>
                </select>
                {inputs.map(input => input)}
                <br/>
                
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="email" />
                <input type="number" readOnly placeholder='500' />
                <button type="button">Submit</button>
            </form>
        </div>
    )
}

export default CustomOrder