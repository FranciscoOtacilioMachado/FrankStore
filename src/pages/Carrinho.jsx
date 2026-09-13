import { Link } from "react-router-dom";
import { produtos } from "../data/produtos";
import ItemCarrinho from "../components/ItemCarrinho";
import ResumoCompra from "../components/ResumoCompra";


function Carrinho () {

    return (
        <main className="pagina-carrinho">
            <h1> Carrinho</h1>

            <div className="carrinho-layout">
                <ul className="lista-produtos">
                    {produtos.map((produto) => (
                        <ItemCarrinho key={produto.id} 
                        produto={produto} />
                    ))}
                </ul>
                <aside className="resumo-lateral">
                    <ResumoCompra produtos={produtos} />

                    <Link to="/pagamento">Finalizar compra</Link>
                </aside>
            </div>
        </main>
    )
}
export default Carrinho;