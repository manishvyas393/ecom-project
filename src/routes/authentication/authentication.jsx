import SignUpForm from "../../components/sign-up-form/SignUpForm"
import LoginForm from "../../components/log-in-form/loginForm"
import "./auth.scss"
const Authentication = () => {
      return (
            <div className="auth-container">
                  <LoginForm />
                  <SignUpForm />
            </div>
      )
}

export default Authentication