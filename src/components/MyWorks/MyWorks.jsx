import React from "react";
import { ProyectItem } from "../ProyectItem/ProyectItem";
import styles from "./MyWorks.module.scss";

export const MyWorks = () => {
  return (
    <section className={styles.MyWorks} id="projects">
      <div className={styles.myWorks__title}>
        <h2>Projects I have created</h2>
      </div>
      <div className={styles.myWorks__container}>
        <ProyectItem title="/01 CryptoView" subtitle="React/Tailwind" />
        <ProyectItem title="/02 PokedefApp" subtitle="React/SCSS2" />
        <ProyectItem title="/03 MovieApp" subtitle="React/SCSS" />
      </div>
    </section>
  );
};
