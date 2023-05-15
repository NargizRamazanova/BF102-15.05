import React, { useState } from 'react'
import SignUp from'../../components/signUp'
import SignIn from '../../components/signIn'

export default function Index() {
  const [isSignUp, setIsSignUp] = useState(false)
  return (
    <>
      {
        isSignUp ? (<SignUp setIsSignUp={setIsSignUp}/>) : (<SignIn setIsSignUp={setIsSignUp}/>)
      
      }
    </>
  )
}
