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
          <TableItem
            height={props.windowsBase[0].height}
            width={props.windowsBase[0].width}
            blinds={props.windowsBase[0].blinds}
            area={props.windowsBase[0].area}
            price={props.windowsBase[0].price}
          />
          <TableItem
            height={props.windowsBase[1].height}
            width={props.windowsBase[1].width}
            blinds={props.windowsBase[0].blinds}
            area={props.windowsBase[1].area}
            price={props.windowsBase[1].price}
          />
          <TableItem
            height={props.windowsBase[0].height}
            width={props.windowsBase[0].width}
            blinds={props.windowsBase[0].blinds}
            area={props.windowsBase[0].area}
            price={props.windowsBase[0].price}
          />
          <TableItem
            height={props.windowsBase[0].height}
            width={props.windowsBase[0].width}
            blinds={props.windowsBase[0].blinds}
            area={props.windowsBase[0].area}
            price={props.windowsBase[0].price}
          />
          <TableItem
            height={props.windowsBase[0].height}
            width={props.windowsBase[0].width}
            blinds={props.windowsBase[0].blinds}
            area={props.windowsBase[0].area}
            price={props.windowsBase[0].price}
          />

        </tbody>
      </table>
    </div>
  )
}

export default Table
