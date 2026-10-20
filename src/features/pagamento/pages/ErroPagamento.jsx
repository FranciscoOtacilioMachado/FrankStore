import { Link } from "react-router-dom"

function ErroPagamento() {
  return (
    <main className="pagina-resultado erroPagamento" >
      <h1>Tentativa de golpe</h1>     
      <Link to="/pagamento">Tentar novamente</Link>
    </main>
  )
}

export default ErroPagamento