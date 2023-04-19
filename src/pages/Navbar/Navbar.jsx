import styles from './Navbar.module.css'
import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import SportsGymnasticsIcon from '@mui/icons-material/SportsGymnastics'
import Button from '../../components/Buttons/Button'

export default function Navbar () {
  const navigate = useNavigate()

  const handleLogo = () => {
    navigate('/home')
  }

  const handleLogin = () => {
    // alert("vijat")
    navigate('/login')
  }

  return (
    <header>
      <ul className={styles.Navbar}>
        <div className={styles.Middlebar}>
          <div className={styles.logo}>
            <SportsGymnasticsIcon onClick={handleLogo} />
          </div>
          <li>
            <Link to='/home'>home</Link>
          </li>
          <li>
            <Link to='/about'>about</Link>
          </li>
          <li>
            <Link to='/classes'>classes</Link>
          </li>
          <li>
            <Link to='/blogs'>blogs</Link>
          </li>
        </div>

        <div>
          <Button
            buttonName='JoinUs'
            className={styles.buttonn}
            onClick={handleLogin}
          />
        </div>
      </ul>
    </header>
  )
}
