import React from "react";
import styles from "./TechnologyCard.module.scss";
import { FaReact, FaSass } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

export const TechnologyCard = ({ tech = "React", text }) => {
  const technologies = {
    React: {
      icon: <FaReact />,
      style: styles.react,
    },
    Tailwind: {
      icon: <SiTailwindcss />,
      style: styles.tailwind,
    },
    Sass: {
      icon: <FaSass />,
      style: styles.sass,
    },
  };

  return (
    <div className={styles.TechnologyCard}>
      <div className={`${styles.cardHeader} ${technologies[tech].style}`}>
        {technologies[tech].icon}
      </div>
      <div className={styles.cardContent}>
        <h1 className={styles.cardTitle}>{tech}</h1>
        {/* <p className={styles.cardText}>{text}</p> */}
        {/* <button className="card-btn one">code</button> */}
      </div>
    </div>
  );
};
