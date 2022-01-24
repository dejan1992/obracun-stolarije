import React, { useState } from 'react'
import styles from "./Navbar.module.css"

const Navbar = ({ props, openModal, openModalDelete }) => {
  const [newWindow, setNewWindow] = useState(false)


  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <ul className={styles.navbar_main}>
          <div className={styles.logo}>
            <i class="fab fa-windows fa-2x"></i>
          </div>
          <ul className={styles.navbar_right}>
            <a onClick={openModal}><li className={styles.add}><i class="fab fa-windows"></i> <i class="fas fa-plus"></i></li></a>
            <a onClick={openModalDelete}><li className={styles.remove}><i class="fab fa-windows"></i> <i class="fas fa-minus"></i></li></a>
            <li className={styles.info}> <i class="fas fa-database"></i></li>
            <li className={styles.info}>Info</li>
          </ul>
        </ul>
      </div>
    </nav >
  )
}

export default Navbar
