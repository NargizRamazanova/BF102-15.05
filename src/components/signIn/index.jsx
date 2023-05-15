import React from 'react'
import styles from './index.module.css'
import { useFormik } from 'formik';
import {useUserContext} from '../../context/UserContext'
import { useNavigate } from 'react-router-dom';


export default function Index({setIsSignUp}) {

  const {setUser} = useUserContext()
  const navigate = useNavigate()

  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: values => {
      setUser(values)
      navigate("/")
    },
  });
  return (
    <div className={styles.signUpPage}>
    <div className={styles.signUpWrapper}>
      <div className={styles.headingWrapper}>
        <h2>Sign In</h2>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <input placeholder='Email'
          name="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <input placeholder='Password'
          name="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <button type='submit'>Sign In</button>
      </form>
      <button onClick={()=> setIsSignUp(true)}>Sign Up</button>

    </div>
</div>
  )
}
