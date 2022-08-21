import React, { useState} from 'react'
import { useDispatch } from 'react-redux'
import { signUpStart } from '../../store/user/user.action'
import Button from '../button/button'
import InputForm from '../input-form/InputForm'
import "./signUpForm.scss"
const defaultFormFields = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
}
const SignUpForm = () => {
      const [formFields, setFormFields] = useState(defaultFormFields)
      const { displayName, email, password, confirmPassword } = formFields;
      const dispatch=useDispatch()
      const resetFormFields = () => {
            setFormFields(defaultFormFields)
      }
      const handleSubmit = async (e) => {
            e.preventDefault()
            if (password !== confirmPassword) {
                  alert("password not matched")
                  return
            }
            try {
                dispatch(signUpStart(email,password,displayName))
                  resetFormFields()
            } catch (error) {
                  if (error.code === "auth/email-already-in-use") {
                        console.log(error.code)
                  }
            }
      }
      const handleChange = (event) => {
            const { name, value } = event.target
            setFormFields({ ...formFields, [name]: value })
      }
      return (
            <div className='sign-up-container'>
                  <h2>Don't have an account?</h2>
                  <span>Sign up with your email and password</span>
                  <form onSubmit={handleSubmit}>
                        <InputForm label={"Display Name"} type="text" required name='displayName' value={displayName} onChange={handleChange} />
                        <InputForm label={"Email"} type="email" required name='email' value={email} onChange={handleChange} />
                        <InputForm label={"Password"} type="password" required name='password' value={password} onChange={handleChange} />
                        <InputForm label={"Confirm Password"} type="password" required value={confirmPassword} name="confirmPassword" onChange={handleChange} />
                        <Button type="submit">Sign Up</Button>
                  </form>
            </div>
      )
}

export default SignUpForm