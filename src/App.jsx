import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import GamesPage from './Pages/GamesPage'
import { GameProvider } from './Context/CartContext'
import CartPage from './Pages/CartPage'
function App() {

  return (
    <>
      <GameProvider>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/game/:id' element={<GamesPage />} />
          <Route path='/cart' element={<CartPage/>}></Route>
        </Routes>
      </GameProvider>
    </>
  )
}

export default App
