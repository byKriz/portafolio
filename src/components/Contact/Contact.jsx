import React from "react";
import styles from "./Contact.module.scss";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

export const Contact = () => {
  return (
    <section className={styles.ContactContainer} id="contact">
      <div className={styles.contact_title}>
        <h2>Contact Me</h2>
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.socialMediaContainer}>
          <a href="https://github.com/byKriz" className={styles.iconLink}>
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/cristian-esquivel-351613135/" className={styles.iconLink}>
            <AiFillLinkedin />
          </a>
        </div>
        <p className={styles.email}>cristianesquivelh@gmail.com</p>
      </div>
    </section>
  );
};
