import React from "react";
import styles from "./TechnologyCard.module.scss";
import { FaReact, FaSass, FaGitSquare } from "react-icons/fa";
import { SiTailwindcss, SiVite } from "react-icons/si";
import { AiOutlineApi } from "react-icons/ai";

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
    ViteJs: {
      icon: <SiVite />,
      style: styles.vitejs,
    },
    ApiRest: {
      icon: <AiOutlineApi />,
      style: styles.apirest,
    },
    Git: {
      icon: <FaGitSquare />,
      style: styles.git,
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
