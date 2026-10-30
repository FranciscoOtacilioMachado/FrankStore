import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { formatarMoeda } from "../../../shared/utils/moeda";
import styles from "./ProdutoCard.module.css";

function ProdutoCard({produto, onAdicionar}) {
    const { id, nome, categoria, preco, imagem } = produto;

    return (
        <li className={styles.card}>
            <img className={styles.imagem} src={imagem} alt={nome} loading="lazy" />

            <div className={styles.corpo}>
                <span className={styles.categoria}>{categoria}</span>
                
                <h2 className={styles.nome}>
                    <Link to={`/produtos/${id}`}>{nome}</Link>
                </h2>

                <p className={styles.preco}>{formatarMoeda(preco)}</p>

                <button
                    type="button"
                    className={styles.botao}
                    onClick={() => onAdicionar(produto)}
                >
                    Adicionar ao carrinho
                </button>
            </div>
        </li>
    )
}

ProdutoCard.propTypes = {
    produto: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
        nome: PropTypes.string.isRequired,
        categoria: PropTypes.string.isRequired,
        preco: PropTypes.number.isRequired,
        imagem: PropTypes.string.isRequired,
    }).isRequired,
    onAdicionar: PropTypes.func.isRequired,
};

export default ProdutoCard;