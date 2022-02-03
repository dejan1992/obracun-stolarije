import React from 'react'
import style from "./Table.module.css"
import TableItem from "../TableItem/TableItem"
import { v4 as uuidv4 } from "uuid"


const Table = props => {

  return (
    <div className={style.list_container}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Dimenzije [mm]</th>
            {/* <th>Roletne</th> */}
            <th>Površina [m<sup>2</sup>]</th>
            <th>Cijena [KM]</th>
            <th>Obriši</th>
          </tr>
        </thead>
        <tbody id="list">
          {props.addWindowToTable.length > 0 && props.addWindowToTable.map((window, index) => (
            <TableItem
              key={index + 1}
              num={index + 1}
              height={window[0]}
              width={window[2]}
              // blinds={window.blinds}
              area={((window[0] * window[2]) / 1000000).toFixed(2)}
              price={window[4]}
            // deleteWindow={props.deleteWindow}
            />
          ))}

        </tbody>
      </table>
    </div>
  )
}

export default Table
