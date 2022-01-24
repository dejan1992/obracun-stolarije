import React from 'react'
import style from "./Table.module.css"
import TableItem from "../TableItem/TableItem"

const Table = props => {

  return (
    <div className={style.list_container}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Dimenzije [mm]</th>
            <th>Roletne</th>
            <th>Površina [m<sup>2</sup>]</th>
            <th>Cijena [KM]</th>
            <th>Obriši</th>
          </tr>
        </thead>
        <tbody id="list">
          {props.windows.map(window => (
            <TableItem
              key={window.id}
              id={window.id}
              height={window.height}
              width={window.width}
              blinds={window.blinds}
              area={window.area}
              price={window.price}
            />
          ))}

        </tbody>
      </table>
    </div>
  )
}

export default Table
