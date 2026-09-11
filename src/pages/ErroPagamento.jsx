import { Link } from "react-router-dom"

function ErroPagamento() {
  return (
    <>
      <h1>Tentativa de golpe</h1>     
      <Link to="/pagamento">Tentar novamente</Link>
    </>
  )
}

export default ErroPagamento