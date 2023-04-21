import React, { Fragment } from "react";
import styles from "./Home.module.css";

import Pricing from "../../components/Pricing/Pricing";

function Home() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.head_txt}>
          "Take Care of your <span className={styles.body_word}>body</span>. Its
          the only place you have to{" "}
          <span className={styles.body_word}>live</span>."
        </h1>
      </div>
      <div>
        <Pricing />
      </div>
    </>
  );
}

export default Home;
