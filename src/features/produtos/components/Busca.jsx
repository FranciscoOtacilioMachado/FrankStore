import PropTypes from "prop-types";
import styles from "./Busca.module.css";

function Busca ({ valor, onChange}) {
    return (
        <div className={styles.campo}>
            <label htmlFor="busca-produtos" className={styles.rotulo}>
                Buscar Produtos
            </label>
            <input 
                id="busca-produtos"
                type="search"
                className={styles.input}
                placeholder="Digite o nome do Produto"
                value={valor}
                onChange={(evento) => onChange(evento.target.value)}          
            />
        </div>
    );
}

Busca.propTypes = {
    valor: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Busca;