import { Link } from "react-router-dom";
import { produtos } from "../data/produtos";
import ItemCarrinho from "../components/ItemCarrinho";


function Carrinho () {
    const total = produtos.reduce (
        (acc, produto) => acc + produto.precoUnitario * 
        produto.quantidade, 0
    )

    return (
        <main>
            <h1> Carrinho</h1>

            <ul>
                {produtos.map((produto) => {
                    <ItemCarrinho key={produto.id} 
                    produto={produto} />
                })}
            </ul>

            <p>Total: R$ {total.toFixed(2)}</p>

            <Link to="/pagamento">Finalizar compra</Link>
        </main>
    )
}
export default Carrinho;