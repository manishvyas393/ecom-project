import React, { useState } from 'react'
import Button, { BUTTON_TYPE_CLASSES } from '../button/button'
import InputForm from '../input-form/InputForm'
import { emailSignInStart, googleSignInStart } from '../../store/user/user.action'
import { useDispatch } from 'react-redux'
const defaultFormFields = {
      email: "",
      password: "",
}
const LoginForm = () => {
      const dispatch = useDispatch()
      const [formFields, setFormFields] = useState(defaultFormFields)
      const { email, password } = formFields;
      const resetFormFields = () => {
            setFormFields(defaultFormFields)
      }

      const handleSubmit = async (e) => {
            e.preventDefault()
            try {
                  dispatch(emailSignInStart(email,password))
                  resetFormFields()
            } catch (error) {
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
            dispatch(googleSignInStart())
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