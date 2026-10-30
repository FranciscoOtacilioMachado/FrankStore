import { useProdutos } from "../hooks/useProdutos";
import ProdutoCard from "../components/ProdutoCard";
import styles from "./Produtos.module.css";


function Produtos () {
    const { produtos, carregando, erro} = useProdutos();

    function handleAdicionar(produto) {
        console.log("Adicionar produto ao carrinho.". produto.nome)
    }

    if(carregando) {
        return <p role="status">Carregando produtos...</p>;
    }

    if(erro) {
        return <p role="alert">{erro}</p>;
    }

    if(produtos.length === 0) {
        return <p>Nenhum produto disponível no momento. </p>;
    }

    return (
        <section className={styles.pagina}>
            <h1>Produtos</h1>

            <ul className= {styles.grade}>
                {produtos.map((produto) => (
                    <ProdutoCard 
                    key={produto.id}
                    produto={produto}
                    onAdicionar={handleAdicionar}
                    />
                ))}
            </ul>
        </section>
    );
}

export default Produtos;