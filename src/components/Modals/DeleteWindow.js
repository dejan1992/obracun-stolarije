import React from 'react'
import TableItem from "../TableItem/TableItem"
// import { v4 as uuidv4 } from "uuid"
// import style from "../Table/Table.module.css"

import "./DeleteWindow.css"
// onClick = {() => props.deleteWindowBase(id)}
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
              {/* <th>ID</th> */}
              <th>Dimenzije [mm]</th>
              {/* <th>Roletne</th> */}
              <th>Površina [m<sup>2</sup>]</th>
              <th>Cijena [KM]</th>
              <th>Obriši</th>
            </tr>
          </thead>
          <tbody id="list">
            {props.windows.map(window => (
              <TableItem
                key={window.id}
                num={window.id}
                height={window.height}
                width={window.width}
                // blinds={window.blinds}
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
