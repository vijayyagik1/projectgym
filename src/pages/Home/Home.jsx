import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Images } from '../../assets/Images'
import styles from './Home.module.css'
import { useState } from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

function Home () {
  const [corousel, setCarousel] = useState(0)

  const handleNxtImg = () => {
    setCarousel(pre => (pre + 1) % Images.length)
  }

  const handlePreImg = () => {
    setCarousel(pre => (pre === 0 ? Images.length - 1 : pre - 1))
  }
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${Images[corousel]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100vw',
          height: '100vh',
          position: 'relative'
        }}
      >
        <Navbar />

        <h1 className={styles.head_txt}>
          "Take Care of your <span className={styles.body_word}>body</span>. Its
          the only place you have to{' '}
          <span className={styles.body_word}>live</span>."
        </h1>
        <div className={styles.button_carousel}>
          <ArrowBackIosIcon onClick={handlePreImg} className={styles.pre_btn} />
          <ArrowForwardIosIcon
            onClick={handleNxtImg}
            className={styles.nxt_btn}
          />
        </div>
      </div>
    </>
  )
}

export default Home
