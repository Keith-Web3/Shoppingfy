import React from 'react'
import { Link } from 'react-router-dom'

import FormTemplate from './FormTemplate'
import { auth } from '../Data/firebase'

function SignUp() {
  return (
    <FormTemplate type="Sign Up">
      <Link to="/login">Already a member? Login</Link>
    </FormTemplate>
  )
}

export default SignUp
