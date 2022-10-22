import React from 'react'
import styles from './NavBar.module.scss'

export const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
        <ul className={styles.navList}>
            <li className={styles.navListItem}>
                <a href="#home" className={styles.navTitle}>
                    Cristian
                    <br />
                    Esquivel
                </a>
            </li>
            <li className={styles.navScroll_Links}>
                <a href="#projects">PROJECTS</a>
                <a href="#about">ABOUT</a>
                <a href="#contact">CONTACT</a>
            </li>
            {/* <li className={styles.navListItem}>
                <p>VE</p>
            </li>    */}
        </ul>
    </nav>
  )
}
