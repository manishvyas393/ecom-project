import React, { useState } from 'react'
import {signInWithGoogle, signInAuthWithEmailAndPassword } from '../../utils/firebase/firebase'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button'
import InputForm from '../input-form/InputForm'
const defaultFormFields = {
      email: "",
      password: "",
}
const LoginForm = () => {
      const [formFields, setFormFields] = useState(defaultFormFields)
      const { email, password } = formFields;
      const resetFormFields = () => {
            setFormFields(defaultFormFields)
      }

      const handleSubmit = async (e) => {
            e.preventDefault()
            try {
                  await signInAuthWithEmailAndPassword(email, password)
                  resetFormFields()
            } catch (error) {
                  console.log(error)
                  if (error?.code) {
                        alert(error.code.replace("auth/", ""))
                  }
                  else {
                        alert(error)
                  }
            }
      }
      const handleChange = (event) => {
            const { name, value } = event.target
            setFormFields({ ...formFields, [name]: value })
      }
      const logGoogleUser = async () => {
            await signInWithGoogle()
      }
      return (
            <div className='sign-up-container'>
                  <h2>Already have an account?</h2>
                  <span>Sign in with email and password</span>
                  <form onSubmit={handleSubmit}>
                        <InputForm label={"Email"} type="email" required name='email' value={email} onChange={handleChange} />
                        <InputForm label={"Password"} type="password" required name='password' value={password} onChange={handleChange} />
                        <div className='buttons-container'>
                              <Button type="submit">Log in</Button>
                              <Button buttonType={BUTTON_TYPE_CLASSES.google} type="button" onClick={logGoogleUser}>Google sign in</Button>
                        </div>
                  </form>
            </div>
      )
}

export default LoginForm