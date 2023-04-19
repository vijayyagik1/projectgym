// import React, { useState } from 'react'
// import Button from '../../../components/Buttons/Button'
// import Input from '../../../components/Inputs/Input'
// import { useNavigate } from 'react-router-dom'
// import Navbar from '../../Navbar/Navbar'

// const handleClickLogin = () => {
//   alert('login page')
// }

// export default function LoginPage () {
//   const navigate = useNavigate()
//   const handleClickRegister = () => {
//     navigate('/register')
//   }

//   const [data, setData] = useState('')
//   return (
//     <>
//       <Navbar />
//       <h1>this is login page</h1>
//       <Input
//         type='email'
//         onChange={e => setData(e.target.value)}
//         placeholder='vijay'
//       />
//       <Input
//         type='password'
//         onChange={e => setData(e.target.value)}
//         placeholder='vijay'
//       />
//       <Button onClick={handleClickLogin} buttonName='login' />
//       <Button onClick={handleClickRegister} buttonName='Register for Gym' />
//       <h1>{data}</h1>
//     </>
//   )
// }

import React, { useState } from 'react'
import './Login.css'
import { NavLink } from 'react-router-dom'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const getData = e => {
    e.preventDefault()
    const userData = JSON.parse(localStorage.getItem('user'))
    //console.log(userData)
    const user = userData.find(element => element.email === email)
    console.log(user)
    if (user) {
      if (user.password === password) {
        // window.location.assign("/")
        // window.location.href = "https://www.w3schools.com";
        alert('login successfull')
      } else {
        alert('invalid password')
      }
    } else {
      alert('User undefined')
    }

    setEmail('')
    setPassword('')
  }

  return (
    <div className='mainPart'>
      <div className='loginclass'>
        <form onSubmit={getData} className='form1'>
          <div className='input1'>
            <h1>Login👍</h1>
            <input
              type='text'
              placeholder='Email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input
              type='password'
              placeholder='Password'
              value={password}
              required
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button className='loginbtn'>Login</button>
        </form>
        <p className='loginreg'>
          Don't Have a Account?{' '}
          <NavLink exact to='/registration' className='reglink'>
            Register Here
          </NavLink>
        </p>
      </div>
    </div>
  )
}
export default Login
