import React from 'react'
import { Link } from 'react-router-dom'

import FormTemplate from './FormTemplate'

function Login({ signUp }) {
  return (
    <FormTemplate type="Login" onSubmit={signUp}>
      <Link to="/signup">Don't have an account? SignUp.</Link>
    </FormTemplate>
  )
}

export default Login
