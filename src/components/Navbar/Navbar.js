import React from 'react'
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <ul className={styles.navbar_main}>
          <div className={styles.logo}>
            <i class="fab fa-windows fa-2x"></i> Simić s.p.
          </div>
          <ul className={styles.navbar_right}>
            <li className={styles.info}>Info</li>
            <li className={styles.add}><i class="fab fa-windows"></i> <i class="fas fa-plus"></i></li>
            <li className={styles.remove}><i class="fab fa-windows"></i> <i class="fas fa-minus"></i></li>
          </ul>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
