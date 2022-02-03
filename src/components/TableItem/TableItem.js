import React from 'react'
import style from "../Table/Table.module.css"
import styleItem from "./TableItem.module.css"



const TableItem = props => {

  const id = props.num


  return (
    <tr>
      <td>{props.num}</td>
      <td>{props.height} x {props.width}</td>
      {/* <td className={style.red}><i class="fas fa-times"></i></td> */}
      <td>{props.area}</td>
      <td>{props.price}</td>
      <td ><i class="fas fa-columns"></i></td>
    </tr>
  )
}

export default TableItem
