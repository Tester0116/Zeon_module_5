import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AuthPage from './screens/auth'
import App from './App'

import './index.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<AuthPage />} />
      <Route path="game" element={<App />} />
    </Routes>
  </BrowserRouter>
)
