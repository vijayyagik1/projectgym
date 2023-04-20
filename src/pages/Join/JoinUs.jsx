import React from 'react'
import Button from '../../components/Buttons/Button'
import { useNavigate } from 'react-router-dom'

export default function JoinUs () {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/login')
  }

  return (
    <>
      <Button onClick={handleNavigate} buttonName='Join Us' />
    </>
  )
}
