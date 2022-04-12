import React from 'react'

const TableItem = props => {
  const id = props.num

  return (
    <tr>
      <td>{props.num}</td>
      <td>{props.height} x {props.width}</td>
      <td>{props.area}</td>
      <td>{props.price}</td>
    </tr>
  )
}

export default TableItem
