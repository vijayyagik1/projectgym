import React from "react";
import styles from "./Classes.module.css";
// import image1 from '../../assets/images/image1.jpg';
// import image2 from '../../assets/images/image2.jpg';
// import { Videos } from "../../assets/Videos";
import { image1 } from "../../assets/Images";
import { image2 } from "../../assets/Images";
import { image3 } from "../../assets/Images";

const Classes = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Training Programs</h1>
      <div className={styles.content}>
        <div className={styles.info}>
          <h2 className={styles.title}>Beginner Program</h2>
          <p className={styles.description}>
            Our beginner program is designed for those who are new to working
            out or have been away from the gym for an extended period of time.
            This program is focused on building a strong foundation of strength
            and conditioning while also introducing proper form and technique
            for common exercises.
          </p>
          <p className={styles.price}>$99/month</p>
        </div>
        <div className={styles.image}>
          <img src={image1} alt="Beginner Program" />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <h2 className={styles.title}>Advanced Program</h2>
          <p className={styles.description}>
            Our advanced program is designed for experienced gym-goers who are
            looking to take their training to the next level. This program is
            focused on progressive overload and advanced training techniques to
            help you achieve your fitness goals.
          </p>
          <p className={styles.price}>$149/month</p>
        </div>
        <div className={styles.image}>
          <img src={image2} alt="Advanced Program" />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <h2 className={styles.title}>Personal Training</h2>
          <p className={styles.description}>
            For those who prefer one-on-one coaching, we offer personal training
            sessions with our certified trainers. Our trainers will work with
            you to create a customized training program based on your specific
            goals and needs.
          </p>
          <p className={styles.price}>Starting at $79/session</p>
        </div>
        <div className={styles.image}>
          <img src={image3} alt="Personal Training" />
        </div>
      </div>
    </div>
  );
};

export default Classes;
