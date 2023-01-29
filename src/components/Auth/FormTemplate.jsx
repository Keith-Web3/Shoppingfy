import React, { useRef } from 'react'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import actions from '../Store/index'
import { auth } from '../Data/firebase'
import Button from '../UI/Button'
import AuthInput from './AuthInput'
import '../../sass/Auth/form_template.scss'

function FormTemplate({ type, onSubmit, children }) {
  const emailRef = useRef()
  const passwordRef = useRef()
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const signUp = async function (e) {
    e.preventDefault()
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )

      navigate('/')
      dispatch(actions.user.setUser({ user }))
    } catch (err) {
      window.alert(err.message)
    }
  }
  const login = async function (e) {
    e.preventDefault()

    try {
      const { user } = await signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )

      navigate('/')
      dispatch(actions.user.setUser({ user }))
    } catch (err) {
      window.alert(err.message)
    }
  }

  return (
    <form
      className="form-template"
      onSubmit={type === 'Sign Up' ? signUp : login}
    >
      <AuthInput type="email" name="email" ref={emailRef} required={true}>
        Email:
      </AuthInput>
      <AuthInput
        type="password"
        name="password"
        ref={passwordRef}
        minLength={6}
        required={true}
      >
        Password:
      </AuthInput>
      {children}
      <Button style={{ bg: '#F9A109', color: '#fff' }}>{type}</Button>
    </form>
  )
}

export default FormTemplate
