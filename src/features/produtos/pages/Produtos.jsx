import { useProdutos } from "../hooks/useProdutos";

function Produtos () {
    const { produtos, carregando, erro} = useProdutos();

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
        <section>
            <h1>Produtos</h1>
            <ul>
                {produtos.map((produto) =>(
                    <li key={produto.id}>{produto.nome}</li>
                ))}
            </ul>
        </section>
    );
}

export default Produtos;