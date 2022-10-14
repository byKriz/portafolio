import React from "react";
import { HomePage } from "../../components/HomePage/HomePage";
import { MyWorks } from "../../components/MyWorks/MyWorks";
import { NavBar } from "../../components/NavBar/NavBar";
import styles from "./Home.module.scss";

export const Home = () => {
  return (
    <>
      <NavBar />
      <main className={styles.content}>
        <HomePage />
        <MyWorks />
      </main>
    </>
  );
};
