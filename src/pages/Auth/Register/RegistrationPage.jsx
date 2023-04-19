// import React from 'react'
// import Input from '../../../components/Inputs/Input'
// import Button from '../../../components/Buttons/Button'
// import { useNavigate } from 'react-router-dom'
// import Navbar from '../../Navbar/Navbar'

// export default function RegistrationPage () {
//   const navigate = useNavigate()

//   const handleClickLogin = () => {
//     navigate('/login')
//   }

//   const handleClickRegister = () => {
//     alert('register')
//   }

//   return (
//     <>
//       <Navbar />
//       <h1>this is RegistrationPage page</h1>
//       <Input type='text' placeholder='first name' />
//       <Input type='text' placeholder='last name' />
//       <Input type='email' placeholder='email' />
//       <Input type='dob' placeholder='date of birth' />
//       <Input type='select' placeholder='enter gender' />
//       <Input type='password' placeholder='password' />
//       <Input type='password' placeholder='confirm password' />
//       <Button buttonName='Register' onClick={handleClickRegister} />
//       <Button
//         onClick={handleClickLogin}
//         buttonName='Already Have an account ?'
//       />
//     </>
//   )
// }


import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import './Registration.css'

function Registration () {
  let initialValues
  if (localStorage.getItem('user') === null) {
    initialValues = []
  } else {
    initialValues = JSON.parse(localStorage.getItem('user'))
  }
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [registered, setRegistered] = useState({
    isSubscribe: false,
    isLogin: false
  })
  const [userData, setUserData] = useState(initialValues)

  const handleSubmit = e => {
    e.preventDefault()
    addingUser(email, username, password)
  }

  const addingUser = (email, username, password) => {
    const newUser = {
      email: email,
      username: username,
      password: password
    }

    localStorage.setItem('user', JSON.stringify(userData))
    setUserData([...userData, newUser])
    setUsername('')
    setEmail('')
    setPassword('')
    alert('registered successfully')
    setRegistered({ ...registered, isLogin: true })
    window.location.assign('/register')
  }
  console.log(registered)
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(userData))
  }, [userData])

  return (
    <>
      <div className='regbg'>
        <div className='maincontentreg'>
          <h1 style={{ color: 'white' }}>Register Here👍</h1>
          <form onSubmit={handleSubmit}>
            <div className='formlogin'>
              Email{' '}
              <input
                type='text'
                name='email'
                placeholder='Email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
              />
            </div>

            <div className='formlogin'>
              UserName
              <input
                name='username'
                type='text'
                placeholder='Username'
                value={username}
                required
                pattern='^[A-Za-z][A-Za-z0-9_]{7,29}$'
                onChange={e => setUsername(e.target.value)}
              />
            </div>

            <div className='formlogin'>
              Password
              <input
                type='password'
                name='password'
                placeholder='Password'
                value={password}
                required
                onChange={e => setPassword(e.target.value)}
              />
            </div>

            <div>
              <div>
                <button className='regbtn'>Register</button>
              </div>
              <p>
                Already have an account?
                <NavLink exact to='/login' className='navlogo'>
                  Login
                </NavLink>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Registration
