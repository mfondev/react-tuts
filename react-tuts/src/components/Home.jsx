import React from 'react'
import SignIn from './Signin'
import SignUp from './SignUp'
import AuthDetails from './AuthDetails'
import Dnd from './Dnd'
// import ImageGrid from './ImageGrid'

const Home = () => {
  return (
    <div>
      <SignIn />
      <SignUp />
      <AuthDetails />
      <Dnd />
      {/* <ImageGrid /> */}
    </div>
  )
}

export default Home
