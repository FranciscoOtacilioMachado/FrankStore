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

export default ResumoCompra