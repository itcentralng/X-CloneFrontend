import React from 'react'
import { useState } from 'react'
import Modal from './SignUp-steps/Modal'
import SignUp from './SignUp'
import './Login.css'
const Login = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)
  const [isSigninModalOpen, setIsSigninModalOpen] = useState(false)
  const openSignupModal = () => setIsSignupModalOpen(true) && setIsSignupModalOpen(false)
  const openSigninModal = () => setIsSigninModalOpen(true) && setIsSignupModalOpen(false)
  const closeSignupModal = () => setIsSignupModalOpen(false)
  const closeSigninModal = () => setIsSigninModalOpen(false)


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setError("Please enter your email, phone, or username.");
      return;
    }
    setError("");
    // API call here
  };

  return (
    <>
      <div className="container">
        
          <div className={(isSigninModalOpen || isSigninModalOpen) && 'overlay'}>
        <div className=  'login-container'  >
              <div className="x-logo">
              <img src="/src/images/Ninja-x.png" alt="X-image" />
            </div>
            <div className="social-login">
                <h2 className='login-heading'>Happening now</h2>
                <h2 className='login-description'>Join today.</h2>
              <button className='social-button'>
                <img src="/src/images/google-logo.png" alt="google-logo" />
                Sign up with Google
              </button>

              <button className='social-button'>
                <img src="/src/images/apple-logo.png" alt="apple-logo" />
                Sign up with Apple
              </button>

              <p className='separator'><span>or</span></p>

              <a href="#" className='create-btn social-button' onClick={(e) => {e.preventDefault(); openSignupModal();}}>Create account</a>
              {isSignupModalOpen && (
                <Modal onClose={closeSignupModal} >
                  <SignUp/>
                </Modal>
              )}

              <p className='low-description'>By signing up, you agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>, including <a href="">Cookie use.</a></p>

              <h2 className='Already-heading'>Already have an account?</h2>
              <button onClick={openSigninModal} className='social-button font-bold bg-dark'>Sign in</button>
              <button className='social-button font-bold bg-dark'>
                Get Grok
              </button>
            </div>

          </div>
               
        </div>
        {

          isSigninModalOpen &&
          <form onSubmit={handleSubmit} className='signIn-container'>
            <div className="x-logo">
              <div onClick={closeSigninModal} className='close-btn'>&times;</div>
              <img src="/src/images/Ninja-x.png" alt="X-image" />
            </div>
          
            <div className="social-login">
              <h2 className="sign-heading">Sign in to X</h2>

              <button type="button" className="social-button">
                <img src="/src/images/google-logo.png" alt="google-logo" />
                Sign up with Google
              </button>

              <button type="button" className="social-button">
                <img src="/src/images/apple-logo.png" alt="apple-logo" />
                Sign up with Apple
              </button>

              <p className="separator"><span>or</span></p>

              <input 
                type="text" 
                placeholder="Phone, email, or username" 
                className="input-field"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              {error && <p className="error-message">{error}</p>}

              <button type="submit" className="social-button font-bold">Next</button>
              <button className="social-button font-bold bg-dark">
                Forgot password?
              </button>

              <p className="low-description">
                Don't have an account? <a href="#"> Sign up </a>
              </p>
            </div>

          </form>
            
          
        } 
      </div> 
    </>
  )
}


export default Login
