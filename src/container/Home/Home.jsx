import React from 'react'
import { HomePage } from '../../components/HomePage/HomePage'
import styles from "./Home.module.scss"

export const Home = () => {
  return (
    <main className={styles.content}>
        <HomePage />
    </main>
  )
}
