import { useState } from 'react'
import React from 'react'
import { createUserWithEmailAndPassword} from 'firebase/auth'
import { auth } from '../firebase'

import './Home.css'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signUp = (e) => {
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => console.log(userCredentials))
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div className='signup-page'>
      <div className='sign-in-container'>
        <form onSubmit={signUp}>
          <h1>Create your Account</h1>
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
          <button type='submit'>Sign up</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp
