import React from 'react'

function Login() {
  return (
    <form className='login-details'>
        <div className="login">
            <div className="img">
                <img src="assets/icons/logo.svg" alt="" />
            </div>
            <div className="form-contr">
                <label htmlFor="email">Email</label>
                <input type="email" id='email' placeholder='Enter your email'/>
            </div>
            <div className="form-contr">
                <label htmlFor="password">Password</label>
                <input type="password" id='password' placeholder='Enter your password'/>
            </div>
            <button>SIGN IN</button>
            <p className='text-center mt-2 mb-5'>Forgot Your Password?</p>
            <div className="not-acc">
                <p>Don’t have anaccount?</p>
                <a href="#">Sign Up Now</a>
            </div>
        </div>
    </form>
  )
}

export default Login
