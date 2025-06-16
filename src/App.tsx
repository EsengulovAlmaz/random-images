import { Route, Routes } from 'react-router-dom'

import { Header } from './components'
import { Favorites, Home, SinglePhoto } from './pages'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/photo/:id" element={<SinglePhoto />} />
      </Routes>
    </>
  )
}

export default App
