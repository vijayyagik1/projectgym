import React, { useState } from 'react'
import Navbar from '../Navbar/Navbar'
import { blogs_Image } from '../../assets/Images'
import styles from './Blogs.module.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'

function Blogs () {
  const [blogImage, setBlogImage] = useState(0)
  const blog_count_arr = [0, 1, 2, 3, 4]

  const handlePreImg = () => {
    setBlogImage(
      pre => (pre - 1 + blog_count_arr.length) % blog_count_arr.length
    )
  }

  const handleNxtImg = () => {
    setBlogImage(pre => (pre + 1) % blog_count_arr.length)
  }

  return (
    <>
      <div>
        <Navbar />
      </div>
      <section className={styles.blogs_container}>
        <div>
          <div className={styles.inner1_section1}>
            <h1 className={styles.h1_tag}>Training Program section</h1>
          </div>
          <div className={styles.inner2_section1}>
            <span className={styles.training_txt}>Training Programs</span>
          </div>

          <div className={styles.blog_img_container}>
            {blog_count_arr.map(count => (
              <img
                key={count.index}
                src={blogs_Image[count + blogImage]}
                alt='img'
                className={styles.disp_img1}
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

export default Blogs
