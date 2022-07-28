import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import useLocalStorage from '../../hooks/useLocalStorage'

import './_auth.scss'

const AuthPage = () => {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [storeName, setStoreName] = useLocalStorage('name', 'name')

  const submitHandler = () => {
    setStoreName(name)
    navigate('/game')
  }

  return (
    <div className="auth">
      <form className="auth__form" onSubmit={submitHandler}>
        <input
          className="auth__form--input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="value"
          required
        />
        <label className="auth__form--label">
          <span style={{ transitionDelay: '0ms' }}>N</span>
          <span style={{ transitionDelay: '50ms' }}>a</span>
          <span style={{ transitionDelay: '100ms' }}>m</span>
          <span style={{ transitionDelay: '150ms' }}>e</span>
        </label>
        <button className="auth__form--btn" type="submit">
          <span>START</span>
          <i></i>
        </button>
      </form>
    </div>
  )
}

export default AuthPage
