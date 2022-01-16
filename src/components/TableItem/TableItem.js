import React from 'react'
import style from "../Table/Table.module.css"


const TableItem = props => {
  return (
    <tr>
      <td>1</td>
      <td>{props.height} x {props.width}</td>
      <td className={style.red}><i class="fas fa-times"></i></td>
      <td>1.44</td>
      <td>150.00</td>
      <td className={style.delete_icon}><i class="fas fa-trash"></i></td>
    </tr>
  )
}

export default TableItem