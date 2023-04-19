import React from 'react'

export default function Input ({ onChange, type, value, placeholder }) {
  return (
    <>
      <input
        onChange={onChange}
        type={type}
        value={value}
        placeholder={placeholder}
      />
    </>
  )
}
