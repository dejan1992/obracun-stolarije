import React, { useState } from 'react'
import "./NewWindow.css"

const NewWindow = (props) => {

  // State
  const [enteredHeight, setEnteredHeight] = useState("")
  const [enteredWidth, setEnteredWidth] = useState("")
  const [enteredPrice, setEnteredPrice] = useState("")

  const heightHandler = (event) => {
    setEnteredHeight(event.target.value)
  }

  const widthHandler = event => {
    setEnteredWidth(event.target.value)
  }

  const priceHandler = event => {
    setEnteredPrice(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()

    const NewWindow = {
      height: enteredHeight,
      width: enteredWidth,
      price: enteredPrice,
      area: enteredHeight * enteredWidth,
    }
    props.onSaveNewWindow(NewWindow)


    setEnteredHeight('')
    setEnteredWidth('')
    setEnteredPrice('')
  }


  return (
    <div className="module-background">
      <div className="module-header">
        <h1>Dodaj novi prozor</h1>
        <div onClick={props.closeModal} className="close-module"><i class="fas fa-times fa-2x"></i></div>
      </div>
      <div className="new-window-module">
        <form action="" onSubmit={submitHandler}>
          <div>
            <label htmlFor="">Visina [mm]</label>
            <input type="number" placeholder="1400" value={enteredHeight} onChange={heightHandler} />
          </div>
          <div>
            <label htmlFor="">Širina [mm]</label>
            <input type="number" placeholder="1200" value={enteredWidth} onChange={widthHandler} />
          </div>
          <div>
            <label htmlFor="">Cijena [KM]</label>
            <input type="number" placeholder="150" value={enteredPrice} onChange={priceHandler} />
          </div>
          <div className='buttons'>
            <button type='submit' className='add-window'>DODAJ</button>
            {/* <a type="none" className='close-window'>ODUSTANI</a> */}
          </div>
        </form>
      </div>
    </div >
  )
}

export default NewWindow
