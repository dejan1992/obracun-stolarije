import React from 'react'
import style from "./List.module.css"

const List = () => {
  return (
    <div className={style.list_container}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Dimenzije</th>
            <th>Roletne</th>
            <th>Površina [m<sup>2</sup>]</th>
            <th>Cijena [KM]</th>
            <th>Obriši</th>
          </tr>
        </thead>
        <tbody id="list">
          <tr>
            <td>1</td>
            <td>1200 X 1200</td>
            <td className={style.red}><i class="fas fa-times"></i></td>
            <td>1.44</td>
            <td>150.00</td>
            <td className={style.delete_icon}><i class="fas fa-trash"></i></td>
          </tr>
          <tr>
            <td>2</td>
            <td>1400 X 1200</td>
            <td className={style.red}><i class="fas fa-times"></i></td>
            <td>1.68</td>
            <td>220.00</td>
            <td className={style.delete_icon}><i class="fas fa-trash"></i></td>
          </tr>
          <tr>
            <td>3</td>
            <td>1200 X 1200</td>
            <td className={style.green}><i class="fas fa-check"></i></td>
            <td>1.44</td>
            <td>250.50</td>
            <td className={style.delete_icon}><i class="fas fa-trash"></i></td>
          </tr>
          <tr>
            <td>4</td>
            <td>1400 X 1400</td>
            <td className={style.green}><i class="fas fa-check"></i></td>
            <td>2.07</td>
            <td>360.50</td>
            <td className={style.delete_icon}><i class="fas fa-trash"></i></td>
          </tr>
          <tr>
            <td>5</td>
            <td>1200 X 1200</td>
            <td className={style.red}><i class="fas fa-times"></i></td>
            <td>1.44</td>
            <td>150.00</td>
            <td className={style.delete_icon}><i class="fas fa-trash"></i></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default List
