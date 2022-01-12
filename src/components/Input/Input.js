import React from 'react'
import style from "./Input.module.css"

const Input = () => {
  return (
    <div className={style.input}>
      <h1>Obračun stolarije</h1>
      <form>
        <div>
          <label>Unesi dimenzije</label>
          <input type="text" placeholder='1200 x 1200' />
          <div className={style.roletne}>
            <label>ROLETNE:</label>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          </div>

        </div>
        <div>
          <button>Dodaj</button>
        </div>
      </form>
    </div>
  )
}

export default Input
