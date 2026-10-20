import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'


import { Routes, Route } from 'react-router-dom'
import Carrinho from './features/carrinho/pages/Carrinho'
import Pagamento from './features/pagamento/pages/Pagamento'
import Sucesso from './features/pagamento/pages/Sucesso'
import ErroPagamento from './features/pagamento/pages/ErroPagamento'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Carrinho />} />
      <Route path="/pagamento" element= {<Pagamento />} />
      <Route path="/sucesso" element= {<Sucesso />} />
      <Route path="/erroPagamento" element= {<ErroPagamento/>} />
    </Routes>
  )
}
export default App
