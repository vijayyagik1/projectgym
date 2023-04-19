import React from 'react'
import Navbar from '../Navbar/Navbar'
import styles from './About.module.css'
import { Videos } from '../../assets/Videos'
import { Videos1 } from '../../assets/Videos'
import ReactPlayer from 'react-player'

export default function AboutUs () {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <section className={styles.container_about}>
        <div className={styles.section1_about}>
          {/* <ol>
            <h1>2) About us and why choose us section</h1>
            <p>
               we have to add youtube video here (as shown in below design )
            </p>
            <p> user can play this video on clicking on that </p>
            <p> will save user registration detail in local storage .</p>
            <p>
               Header will be sticky , will not move on scrolling home page .
            </p>
            <p> Handle all possible scenarios at registration page .</p>
          </ol> */}
        </div>
      </section>
      <section>
        <div className={styles.section2_about}>
          <div className={styles.section2_inner1}>
            <ReactPlayer
              url={Videos}
              controls={true}
              playing={false}
              loop={true}
              muted={true}
              className={styles.video1}
            />
          </div>
          <div className={styles.section2_inner2}>
            <span className={styles.about_txt}>About Us</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              atque dolore est quos ad! Modi ipsam suscipit quidem, illum
              placeat doloremque, et at tempora fugit vero laboriosam.
              Veritatis, amet mollitia.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className={styles.section3_about}>
          <div className={styles.section3_inner1}>
            <span className={styles.why_txt}>Why Choosen Us</span>
            <h3>Consultation With Expert</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
              sunt suscipit maiores aut voluptatibus id, saepe nostrum
              laboriosam quo itaque qui vitae illum similique laudantium
              quibusdam ratione minima, dolorem magnam.
            </p>
            <h3>Best Workout Facilities</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque doloribus in omnis asperiores ipsa error nam distinctio
              consequuntur accusantium impedit non, dolorum enim autem, sequi
              placeat iusto delectus maiores perspiciatis?
            </p>
          </div>
          <div className={styles.section2_inner1}>
            <ReactPlayer
              url={Videos1}
              controls={true}
              playing={false}
              loop={true}
              muted={true}
              className={styles.video1}
            />
          </div>
        </div>
      </section>
    </>
  )
}
