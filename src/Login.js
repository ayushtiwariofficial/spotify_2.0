import React from 'react'
import './login.css'
import { loginUrl } from './spotify'

function login() {
  return (
    <div className='login'>
      <img src='banner.png'
      alt='spotify' />
      <a href={loginUrl}>Login with Spotify</a>
    </div>
  )
}

export default login
