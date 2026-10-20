import { Link } from "react-router-dom"

function Sucesso() {
    return (
        <main className="pagina-resultado sucesso">
            <h1>Compra aprovada com sucesso!</h1>
            <Link to="/">Voltar ao carrinho</Link>
        </main>
    )
}

export default Sucesso