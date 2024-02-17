import React from 'react'

function SignUp({setShowpopup}) {
  return (
    <form className='login-details'>
        <div className="login">
            <div className="img">
                <img src="assets/icons/logo.svg" alt="" onClick={()=>setShowpopup(false)} />
            </div>
            <div className="form-contr">
                <label htmlFor="name">Full Name</label>
                <input type="text" id='name' placeholder='Enter your Name'/>
            </div>
            <div className="form-contr">
                <label htmlFor="number">Mobile Number</label>
                <input type="number" id='number' placeholder='Enter your Mobile Number'/>
            </div>
            <div className="form-contr">
                <label htmlFor="email">Email</label>
                <input type="email" id='email' placeholder='Enter your email'/>
            </div>
            <div className="form-contr">
                <label htmlFor="password">Password</label>
                <input type="password" id='password' placeholder='Enter your password'/>
            </div>
            <div className="form-contr">
                <label htmlFor="confirm">Password</label>
                <input type="password" id='confirm' placeholder='Confirm your password'/>
            </div>
            <button>REGISTER</button>
            <div className="not-acc">
                <a href="#">Go to Login</a>
            </div>
        </div>
    </form>
  )
}

export default SignUp
