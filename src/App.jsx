import { useState } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'

import History from './components/Pages/History/history'
import Homepage from './components/Pages/Homepage/Homepage'
import AddItem from './components/Sub_Components/AddItem'
import ItemPreview from './components/Sub_Components/ItemPreview'
import NavBar from './components/Sub_Components/NavBar'
import ShoppingList from './components/Sub_Components/ShoppingList'

function App() {
  const [navShown, setNavShown] = useState(false)
  return (
    <main>
      <NavBar navShown={navShown} setNavShown={setNavShown} />
      {/* <Homepage navShown={navShown} setNavShown={setNavShown} /> */}
      <Routes>
        <Route
          path="/"
          element={<Homepage navShown={navShown} setNavShown={setNavShown} />}
        />
        <Route path="/history" element={<History />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <ShoppingList navShown={navShown} setNavShown={setNavShown} />
      {/* <AddItem navShown={navShown} setNavShown={setNavShown} /> */}
      {/* <ItemPreview navShown={navShown} setNavShown={setNavShown} /> */}
    </main>
  )
}

export default App
