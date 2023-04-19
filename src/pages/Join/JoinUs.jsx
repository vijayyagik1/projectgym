// import React from 'react'
// import Button from '../../components/Buttons/Button'
// import { useNavigate } from 'react-router-dom'

// // const navigate = useNavigate ();
// const navigate = useNavigate();

// const handleNavigate = () => {
//   navigate('./login')
// }

// export default function JoinUs () {
//   return (
//     <>
//       <Button onClick={handleNavigate} buttonName='jionUs' />
//     </>
//   )
// }


import React from 'react'
import Button from '../../components/Buttons/Button'
import { useNavigate } from 'react-router-dom'

export default function JoinUs () {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('./login')
  }

  return (
    <>
      <Button onClick={handleNavigate} buttonName='joinUs' />
    </>
  )
}
