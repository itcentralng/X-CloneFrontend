import React from 'react'
import { useState } from 'react'
import './Login.css'
const Login = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);

  function handleShowModal() {
    setShowModal(prevShowModal => !prevShowModal);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim()) {
      setError("Please enter your email, phone, or username.");
      return;
    }
    setError("");
    // Add further submit logic here if needed
  };

  return (
    <>
      <div className="container">
        
          <div className={showModal && 'overlay'}>
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

              <a href="#" className='create-btn social-button'>Create account</a>

              <p className='low-description'>By signing up, you agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>, including <a href="">Cookie use.</a></p>

              <h2 className='Already-heading'>Already have an account?</h2>
              <button onClick={handleShowModal} className='social-button font-bold bg-dark'>Sign in</button>
              <button className='social-button font-bold bg-dark'>
                Get Grok
              </button>
            </div>

          </div>
            

              
        </div>
        {

          showModal &&
          <form action="/" onSubmit={handleSubmit} className='signIn-container'>
            <div className="x-logo">
              <div onClick={handleShowModal} className='close-btn'>&times;</div>
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
              <button type="submit" className="social-button font-bold bg-dark">
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
