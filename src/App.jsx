import { useState, useEffect } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { nanoid } from 'nanoid'
import { useSelector, useDispatch } from 'react-redux'

import History from './components/Pages/History/history'
import Homepage from './components/Pages/Homepage/Homepage'
import Statistics from './components/Pages/Statistics/Statistics'
import AddItem from './components/Sub_Components/AddItem'
import ItemPreview from './components/Sub_Components/ItemPreview'
import NavBar from './components/Sub_Components/NavBar'
import ShoppingList from './components/Sub_Components/ShoppingList'
import EventInfo from './components/Pages/History/EventInfo'
import SignUp from './components/Auth/SignUp'
import Login from './components/Auth/Login'
import Profile from './components/Profile'
import Popup from './components/UI/Popup'
import MainProfile from './components/Utils/MainProfile'
import EditProfile from './components/Utils/EditProfile'
import { actions } from './components/Store/AuthState'
import Settings from './components/Settings'

let timer

function App() {
  const [navShown, setNavShown] = useState(false)
  const [asideState, setAsideState] = useState('list')
  const [newItem, setNewItem] = useState({})
  const [clickedEvent, setClickedEvent] = useState([])
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn)
  const errMessage = useSelector(state => state.auth.errorMessage)
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    if (isLoggedIn) setNavShown(false)
    return
  }, [location])

  useEffect(() => {
    timer = setTimeout(() => {
      dispatch(actions.resetErrorMessage(''))
    }, 3100)

    return () => clearTimeout(timer)
  }, [errMessage])

  return (
    <main>
      <AnimatePresence>
        {errMessage && <Popup key={nanoid()} message={errMessage} />}
        {isLoggedIn && (
          <NavBar
            navShown={navShown}
            setNavShown={setNavShown}
            key={nanoid()}
          />
        )}
        <Routes location={location} key={location.path}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          {isLoggedIn && (
            <>
              <Route
                path="/"
                element={
                  <Homepage navShown={navShown} setNavShown={setNavShown} />
                }
              />
              <Route path="/settings" element={<Settings />} />
              <Route path="/user-details" element={<Profile />}>
                <Route path="/user-details" element={<MainProfile />} />
                <Route path="/user-details/edit" element={<EditProfile />} />
              </Route>
              <Route
                path="/history"
                element={
                  <History
                    setClickedEvent={setClickedEvent}
                    navShown={navShown}
                  />
                }
              />
              <Route path="/history/:id" element={<EventInfo />} />
              <Route
                path="/statistics"
                element={<Statistics navShown={navShown} />}
              />
            </>
          )}
          <Route path="*" element={<Navigate to="/signup" />} />
        </Routes>
        {!['/login', '/signup'].includes(location.pathname) &&
          (asideState === 'list' ? (
            <ShoppingList
              key={nanoid()}
              navShown={navShown}
              setAsideState={setAsideState}
              clickedEvent={clickedEvent}
              setClickedEvent={setClickedEvent}
            />
          ) : asideState === 'add' ? (
            <AddItem
              key={nanoid()}
              navShown={navShown}
              setAsideState={setAsideState}
              setNewItem={setNewItem}
            />
          ) : (
            <ItemPreview
              setAsideState={setAsideState}
              newItem={newItem}
              key={nanoid()}
              navShown={navShown}
            />
          ))}
      </AnimatePresence>
    </main>
  )
}

export default App
