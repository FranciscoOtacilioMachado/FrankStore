import { useMemo, useState } from "react";
import { useProdutos} from "../hooks/useProdutos";
import { filtrarProdutos } from "../utils/busca"; 
import Busca from "../components/Busca";
import ProdutoCard from "../components/ProdutoCard";
import styles from "./Produtos.module.css";


function Produtos () {
    const { produtos, carregando, erro} = useProdutos();
    const [termo, setTermo] = useState("")

    const produtosFiltrados = useMemo(
        () => filtrarProdutos(produtos, termo), 
        [produtos, termo]
    );

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

            <Busca valor={termo} onChange={setTermo} />

            {produtosFiltrados.length === 0 ? (
                <div className={styles.vazio} role="status">
                    <p>Nenhum produto encontrado</p>
                    <button
                        type="button"
                        className={styles.botaoLimpar}
                        onClick={() => setTermo("")}>
                        Limpar
                    </button>
                </div>    
            ) : (
            <ul className= {styles.grade}>
                {produtosFiltrados.map((produto) => (
                    <ProdutoCard 
                    key={produto.id}
                    produto={produto}
                    onAdicionar={handleAdicionar}
                    />
                ))}
            </ul>
            )}
        </section>
    );
}

export default Produtos;