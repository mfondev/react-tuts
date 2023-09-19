import React, { useEffect, useState } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth'

import { auth } from '../firebase'

const AuthDetails = () => {
  const [authUser, setAuthuser] = useState(null)
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthuser(user)
      } else {
        setAuthuser(null)
      }
    })
    return () =>{
     listen()
    }
  }, [])
  const userSignOut = () =>{
   signOut(auth).then(()=>{
    console.log('Signout Successfully')
   }).catch(error => console.log(error))
  }
  return (
    <div>
      {authUser ? <p>{`Signed in as ${authUser.email}`}</p> : <p>Signed Out</p>}
    </div>
  )
}

export default AuthDetails
