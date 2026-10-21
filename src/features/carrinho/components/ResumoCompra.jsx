import PropTypes from "prop-types"

function ResumoCompra({ produtos }) {
    const total = produtos.reduce(
        (acc, produto) => acc + produto.precoUnitario * produto.quantidade, 0
    )

    return (
        <section className="resumo-compra" aria-label="Resumo da compra">
            <p>Total: R$ { total.toFixed(2) }</p>
        </section>
    )
}

ResumoCompra.propTypes = {
    produtos: PropTypes.arrayOf(
        PropTypes.shape({
            precoUnitario: PropTypes.number.isRequired,
            quantidade: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default ResumoCompra