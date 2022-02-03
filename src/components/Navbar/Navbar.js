import React, { useState } from 'react'
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"

const Navbar = ({ props, openModal, openModalDelete }) => {
  const [newWindow, setNewWindow] = useState(false)

  const links = [
    {
      id: 1,
      path: "/",
      text: "Home"
    },
    {
      id: 2,
      path: "/about",
      text: "About"
    }
  ]


  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <ul className={styles.navbar_main}>
          <Link to={'/'}><li className={styles.logo}>
            <i className="fab fa-atlassian"></i>
          </li></Link>
          <ul className={styles.navbar_right}>
            <a onClick={openModal}><li className={styles.add}><i className="far fa-window-maximize"></i> <i className="fas fa-plus"></i></li></a>
            <a onClick={openModalDelete}><li className={styles.remove}><i className="far fa-window-maximize"></i> <i className="fas fa-minus"></i></li></a>
            <Link to={'/info'}><li className={styles.info}><i className="fas fa-info"></i></li></Link>
          </ul>
        </ul >
      </div >
    </nav >
  )
}

export default Navbar
