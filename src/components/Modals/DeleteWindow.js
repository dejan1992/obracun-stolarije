import React from 'react'
import BaseItem from "../TableItem/BaseItem"
import "./DeleteWindow.css"

const DeleteWindow = (props) => {
  const data = props.getWindows;

  return (
    <div className="delete-module-background">
      <div className="delete-module-header">
        <h1>Obriši iz baze</h1>
        <div onClick={props.closeModalDelete} className="close-module"><i className="fas fa-times fa-2x"></i></div>
      </div>
      <div className="delete-new-window-module">

        <table className="delete-list_container">
          <thead>
            <tr>
              <th>ID</th>
              <th>Dimenzije [mm]</th>
              <th>Površina [m<sup>2</sup>]</th>
              <th>Cijena [KM]</th>
              <th>Obriši</th>
            </tr>
          </thead>
          <tbody id="list">
            {props.windows.map((window, index) => (
              <BaseItem
                key={window.id}
                num2={window.id}
                num={index + 1}
                height={window.height}
                width={window.width}
                area={window.area}
                price={window.price}
                deleteWindow={props.deleteWindow}
              />
            ))}

          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DeleteWindow
