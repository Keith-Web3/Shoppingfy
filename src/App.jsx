import { useState } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { useLocation } from 'react-router-dom'
import { nanoid } from 'nanoid'

import History from './components/Pages/History/history'
import Homepage from './components/Pages/Homepage/Homepage'
import Statistics from './components/Pages/Statistics/Statistics'
import AddItem from './components/Sub_Components/AddItem'
import ItemPreview from './components/Sub_Components/ItemPreview'
import NavBar from './components/Sub_Components/NavBar'
import ShoppingList from './components/Sub_Components/ShoppingList'
import { useEffect } from 'react'

function App() {
  const [navShown, setNavShown] = useState(false)
  const [asideState, setAsideState] = useState('list')
  const [newItem, setNewItem] = useState({})
  const [clickedEvent, setClickedEvent] = useState([])
  const location = useLocation()

  useEffect(() => {
    setNavShown(false)
  }, [location])

  return (
    <main>
      <AnimatePresence>
        <NavBar navShown={navShown} setNavShown={setNavShown} key={nanoid()} />
        <Routes location={location} key={location.path}>
          <Route
            path="/"
            element={<Homepage navShown={navShown} setNavShown={setNavShown} />}
          />
          <Route
            path="/history"
            element={
              <History setClickedEvent={setClickedEvent} navShown={navShown} />
            }
          />
          <Route
            path="/statistics"
            element={<Statistics navShown={navShown} />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {asideState === 'list' ? (
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
        )}
      </AnimatePresence>
    </main>
  )
}

export default App
