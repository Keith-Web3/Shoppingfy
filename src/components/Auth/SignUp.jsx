import React from 'react'
import { Link } from 'react-router-dom'

import FormTemplate from './FormTemplate'

function SignUp() {
  const footer = (
    <div className="footer">
      <p>Already a member? </p>
      <Link to="/login">Login</Link>
    </div>
  )

  return (
    <FormTemplate button="Start shopping now" footer={footer} type="SIGNUP">
      <h1>Hello stranger, kindly sign up to use this app </h1>
      <p>Keep track of your grocery list with our virtual shopping cart</p>
    </FormTemplate>
  )
}

export default SignUp
