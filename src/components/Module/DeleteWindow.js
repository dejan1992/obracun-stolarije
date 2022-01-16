import React from 'react'
import "./DeleteWindow.css"

const DeleteWindow = () => {
  return (
    <div className="delete-module-background">
      <div className="delete-module-header">
        <h1>Obriši iz baze</h1>
      </div>
      <div className="delete-new-window-module">

        <table className="delete-list_container">
          <thead>
            <tr>
              <th>ID</th>
              <th>Dimenzije [mm]</th>
              <th>Cijena [KM]</th>
              <th>Obriši</th>
            </tr>
          </thead>
          <tbody id="list">
            <tr>
              <td>1</td>
              <td>1200 x 1200</td>
              <td>150.00</td>
              <td className="delete_icon"><i class="fas fa-times-circle"></i></td>
            </tr>
            <tr>
              <td>1</td>
              <td>1200 x 1200</td>
              <td>150.00</td>
              <td className="delete_icon"><i class="fas fa-times-circle"></i></td>
            </tr>
            <tr>
              <td>1</td>
              <td>1200 x 1200</td>
              <td>150.00</td>
              <td className="delete_icon"><i class="fas fa-times-circle"></i></td>
            </tr>
            <tr>
              <td>1</td>
              <td>1200 x 1200</td>
              <td>150.00</td>
              <td className="delete_icon"><i class="fas fa-times-circle"></i></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DeleteWindow