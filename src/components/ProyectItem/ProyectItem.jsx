import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProyectItem.module.scss";
import pruebaImg from "@assets/pruebaimg.png";

export const ProyectItem = ({ img = pruebaImg, title, subtitle }) => {
  return (
    <div className={styles.ProyectItem}>
      <figure className={styles.proyectMedia}>
        <Link to="/">
          <img src={img} alt="" className={styles.proyectImg}/>
        </Link>
      </figure>
      <div className={styles.proyectDescription}>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};
