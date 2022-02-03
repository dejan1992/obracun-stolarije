import React from 'react'
import style from "../Table/Table.module.css"
import styleItem from "./TableItem.module.css"

const BaseItem = props => {

  const id = props.num2

  return (
    <tr>
      <td>{props.num}</td>
      <td>{props.height} x {props.width}</td>
      <td>{props.area}</td>
      <td>{props.price}</td>
      <td className={styleItem.delete_icon} onClick={() => props.deleteWindow(id)}><i className="fas fa-trash"></i></td>
    </tr>
  )
}

export default BaseItem
