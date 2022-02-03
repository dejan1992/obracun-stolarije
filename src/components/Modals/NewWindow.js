import React, { useState } from 'react'
import "./NewWindow.css"
import { v4 as uuidv4 } from 'uuid'
import { Store } from 'react-notifications-component'

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

    if (enteredHeight == '' || enteredWidth == '' || enteredPrice == '') {

      Store.addNotification({
        title: "Greška!",
        message: "Ispuni sva polja",
        type: "warning",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: false
        }
      });
    } else {

      Store.addNotification({
        title: "Uspjeh!",
        message: "Prozor uspješno dodan",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 2000,
          onScreen: false
        }
      });

      const NewWindow = {
        id: uuidv4(),
        height: enteredHeight,
        width: enteredWidth,
        price: enteredPrice,
        area: ((enteredHeight * enteredWidth) / 1000000).toFixed(2),
      }
      props.onSaveNewWindow(NewWindow)
      setEnteredHeight('')
      setEnteredWidth('')
      setEnteredPrice('')
    }
  }


  return (
    <div className="module-background">
      <div className="module-header">
        <h1>Dodaj novi prozor</h1>
        <div onClick={props.closeModal} className="close-module"><i className="fas fa-times fa-2x"></i></div>
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
