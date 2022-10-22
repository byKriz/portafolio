import React from 'react'
import styles from "./HomePage.module.scss"

export const HomePage = () => {
  return (
    <section className={styles.HomePage} id="home">
        <div className={styles.homeText}>
            <h1 className={styles.homeTitle}>
                <span>FRONTEND</span>
                <br />
                <span>DEVELOPER</span>
            </h1>
        </div>
    </section>
  )
}
