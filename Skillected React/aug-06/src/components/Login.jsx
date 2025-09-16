import React from 'react'

const Login = () => {
  return (
    <div className="login-container center">
      <div className="login-card">
        <h1 className="login-title">Login</h1>
        <div className="login-fields">
          <input className="login-input" type="text" placeholder="Enter Email" />
          <input className="login-input" type="password" placeholder="Enter Password" />
          <button className="login-btn">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Login