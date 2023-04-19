import React from 'react'
import styles from './Button.module.css'

export default function Button ({ onClick, buttonName, className }) {
  const buttonClasses = `${styles.button} ${className}`
  return (
    <>
      <button onClick={onClick} className={buttonClasses}>
        {buttonName}
      </button>
    </>
  )
}
