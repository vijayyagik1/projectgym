import React from "react";
import ReactPlayer from "react-player";
import styles from "./About.module.css";
import { Videos } from "../../assets/Videos";
import { Videos1 } from "../../assets/Videos";

function AboutUsPage() {
  return (
    <div className={styles.aboutUsPage}>
      <div className={styles.aboutUsText}>
        <h2>About Us</h2>
        <p>
          Our gym is dedicated to providing a fun and challenging workout
          experience for people of all fitness levels. We offer a variety of
          classes and training programs to help you achieve your health and
          fitness goals.
        </p>
        <p>
          Our trainers are experienced professionals who are passionate about
          helping you succeed. Whether you're just starting out or looking to
          take your fitness to the next level, we're here to support and
          motivate you every step of the way.
        </p>
      </div>
      <div className={styles.videoContainer}>
        <ReactPlayer url={Videos} controls width="100%" height="100%" />
      </div>
      <div className={styles.videoContainer}>
        <ReactPlayer url={Videos1} controls width="100%" height="100%" />
      </div>
    </div>
  );
}

export default AboutUsPage;
