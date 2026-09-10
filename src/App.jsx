import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'


import { Routes, Route } from 'react-router-dom'
import Carrinho from './pages/Carrinho'
import Pagamento from './pages/Pagamento'
import Sucesso from './pages/Sucesso'
import Falha from './pages/Falha'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Carrinho />} />
      <Route path="/pagamento" element= {<Pagamento />} />
      <Route path="/sucesso" element= {<Sucesso />} />
      <Route path="/falha" element= {<Falha/>} />
    </Routes>
  )
}
export default App
