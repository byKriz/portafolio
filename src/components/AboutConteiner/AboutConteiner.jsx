import React from "react";
import styles from "./AboutConteiner.module.scss";

export const AboutConteiner = () => {
  return (
    <section className={styles.AboutConteiner} id="about">
      <div className={styles.about_title}>
        <h2>
          Let me tell you a little
          about myself
        </h2>
      </div>
      <div className={styles.about_text}>
        <h4>Welcome,</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo
          beatae corporis cupiditate recusandae. Cum voluptates est facere iure,
          sapiente exercitationem repudiandae, enim minus sequi eum quasi
          incidunt dolores, necessitatibus quisquam! Commodi quasi nisi
          corrupti. Officiis voluptatem at eum cum minima eligendi, atque,
          quibusdam
        </p>
      </div>
      {/* <figure>
            <img src="" alt="" />
        </figure> */}
    </section>
  );
};
