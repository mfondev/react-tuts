
import React from 'react'
import SignIn from './Signin'
import SignUp from './SignUp'
import AuthDetails from './AuthDetails'

const Home = () => {
  return (
    <div>
      <SignIn />
      <SignUp />
      <AuthDetails />
    </div>
  )
}

export default Home
