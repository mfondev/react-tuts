import { useState } from 'react'
import React from 'react'
import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../firebase'

import './Home.css'

const Home = () => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const signIn = (e) => {
e.preventDefault()
si
  }
  return (
    <div className='signup-page'>
      <div className='sign-in-container'>
        <form onSubmit={signIn}>
          <h1>Signin to your Account</h1>
          <input
            type='email'
            id='email'
            placeholder='Enter your email'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            id='password'
            placeholder='Enter your password'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>Sign in</button>
        <