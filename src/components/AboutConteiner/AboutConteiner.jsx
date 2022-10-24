import React from "react";
import { TechnologyCard } from "../TechnologyCard/TechnologyCard";
import styles from "./AboutConteiner.module.scss";
import profile from "@assets/profile/profile.png";

export const AboutConteiner = () => {
  return (
    <section className={styles.AboutConteiner} id="about">
      <div className={styles.about_title}>
        <h2>Let me tell you a little about myself</h2>
      </div>
      <div className={styles.about_containt}>
        <div className={styles.profile_content}>
          <div className={styles.img_container}>
            <img src={profile} alt="" className={styles.profile_img} />
          </div>
          <div className={styles.about_text}>
            <h4>Welcome,</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Molestiae, nobis modi voluptas tempore laudantium debitis quia
              consectetur itaque perspiciatis ratione aliquid possimus
              temporibus labore mollitia recusandae sunt doloremque id
              laboriosam. Quia, iusto. Tempore nisi dolores nam veniam
              cupiditate repudiandae pariatur dolorem earum totam ipsum!
              Corrupti reiciendis soluta, nesciunt facere suscipit magni,
              quibusdam recusandae asperiores eos modi eveniet perferendis
              obcaecati vel? Et, nulla! Nostrum itaque incidunt porro? Commodi,
              dolorem quae sequi deserunt et earum, quis tempore illo aperiam
              iusto explicabo nulla magnam. Ad qui error consequuntur ut magni
              officiis impedit quas. Expedita doloribus itaque provident ullam
              non repellendus, quisquam esse iste officia. Dolor sit consequatur
              sed! Dolor mollitia reiciendis, accusantium quam tenetur
              accusamus. Repellat iure praesentium ab libero reiciendis error
              odit! Magnam reprehenderit asperiores incidunt in! Recusandae
              inventore officia natus nostrum odit eligendi adipisci esse
              quisquam fuga commodi. Esse ipsum quis, aliquam provident culpa ad
              iure officiis facere tempore, tenetur fuga.
            </p>
          </div>
        </div>
        {/* <figure>
            <img src="" alt="" />
        </figure> */}
        <div className={styles.my_skills}>
          <h3>My Skills</h3>
          <div className={styles.cardContainer}>
            <TechnologyCard />
            <TechnologyCard tech="Tailwind" />
            <TechnologyCard tech="Sass" />
            <TechnologyCard tech="ViteJs" />
            <TechnologyCard tech="ApiRest" />
          </div>
        </div>
      </div>
    </section>
  );
};
