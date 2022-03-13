import React from 'react'

function RegularOrder() {
  return (
    <div className="regularOrder">
        <div className="cakeImage">
            <div className="selectImg">
                <img src="" alt="selected Img" />
            </div>
            <button >Customize</button>
        </div>
        <form noValidate>
        <div>
            <label htmlFor="weight">Weight</label>
            <input type="number" id="weight" />
        </div>
        <div>
            <label htmlFor='egg'>Eggless?</label>
            <select type="text"  id="egg" list='yesNo' >
                <option value="YesUseEgg" >Yes, I want it Eggless</option>
                <option value="NoEgg">No, Dont use eggs</option>
            </select>
        </div>
        <div>
            <label htmlFor='flavour'>Flavour</label>
            <input typeof='text' id='flavour' list='flavours' />
            <datalist id='flavours'>
                {/**add a mappping function */}
            </datalist>
        </div>
        <br/>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" required />
        </div>
        <div>
            <label htmlFor='email'>Email</label>
            <input type="email" requiredField={true} />
        </div>
        <div>
            <label htmlFor='pickUpDate'>Pick Up Date</label>
            <input type="date" id='pickUpDate'/>
        </div>
        <div className='buy'>
            <input readOnly value="500" className='price'/>
            <button>Make Order</button>
        </div>
    </form>
    </div>
  )
}

export default RegularOrder