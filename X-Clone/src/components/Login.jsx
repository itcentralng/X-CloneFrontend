import React from 'react'
import './Login.css'
const Login = () => {
  return (
    <>
      <div className="login-container">
        <div className="x-logo">
          <img src="/src/images/Ninja-x.png" alt="X-image" />
        </div>
        <div className="social-login">
          {/* <div className="login-heading"> */}
            <h2 className='login-heading'>Happening now</h2>
            <h2 className='login-description'>Join today.</h2>
          {/* </div> */}
          <button className='social-button'>
            <img src="/src/images/google-logo.png" alt="google-logo" />
            Sign up with Google
          </button>

          <button className='social-button'>
            <img src="/src/images/apple-logo.png" alt="apple-logo" />
            Sign up with Apple
          </button>

          <p className='separator'><span>or</span></p>

          <a href="#" className='create-btn social-button'>Create account</a>

          <p className='low-description'>By signing up, you agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>, including <a href="">Cookie use.</a></p>

          <h2 className='Already-heading'>Already have an account?</h2>
          <button className='social-button font-bold bg-dark'>Sign in</button>
          <button className='social-button font-bold bg-dark'>
            Get Grok
          </button>
        </div>
      </div>
    </>
  )
}

export default Login
