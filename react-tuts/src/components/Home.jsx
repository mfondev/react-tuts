import React from 'react'
import SignIn from './Signin'
import SignUp from './SignUp'
import AuthDetails from './AuthDetails'
// import ImageGrid from './ImageGrid'

const Home = () => {
  return (
    <div>
      <SignIn />
      <SignUp />
      <AuthDetails />
      {/* <ImageGrid /> */}
    </div>
  )
}

export default Home
