import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { Class_Images } from '../../assets/Images'
import styles from './Classes.module.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

function Classes () {
  const [imgCount, setImageCount] = useState(0)
  const imageCountArray = [0, 1, 2, 3, 4]

  const handlePreImg = () => {
    setImageCount(
      pre => (pre - 1 + imageCountArray.length) % imageCountArray.length
    )
  }

  const handleNxtImg = () => {
    setImageCount(pre => (pre + 1) % imageCountArray.length)
  }

  return (
    <>
      <div>
        <Navbar />
      </div>
      <section className={styles.class_container}>
        <div>
          <div className={styles.inner1_section1}>
            <h1>Training Program</h1>
          </div>
          <div className={styles.inner2_section1}>
            <span className={styles.training_txt}>Training Programs</span>
          </div>

          <div className={styles.image_scroller}>
            {imageCountArray.map(count => (
              <img
                className={styles.disp_img}
                key={count}
                src={Class_Images[count + imgCount]}
                alt='img'
              />
            ))}
          </div>
          <div className={styles.scroll_button}>
            <ArrowBackIosIcon onClick={handlePreImg} />
            <ArrowForwardIosIcon onClick={handleNxtImg} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Classes
