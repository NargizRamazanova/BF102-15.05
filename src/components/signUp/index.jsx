import React from 'react'
import styles from './index.module.css'

export default function Index({setIsSignUp}) {
  return (
    <div className={styles.signUpPage}>
        <div className={styles.signUpWrapper}>
          <div className={styles.headingWrapper}>
            <button onClick={()=> setIsSignUp(false)}>X</button>
            <h2>Sign Up</h2>
            <p>It’s quick and easy.</p>
          </div>
          <form>
            <div>
              <input placeholder='First Name'/>
              <input placeholder='Last Name'/>
            </div>
            <input placeholder='Mobile'/>
            <input placeholder='Email'/>
            <input id="female" type='radio' value="female"/>
            <label for="female">Female</label>
            <input id='male' type='radio' value="male"/>
            <label for="male">Male</label>
            <button >Sugn Up</button>
          </form>
        </div>
    </div>
  )
}
