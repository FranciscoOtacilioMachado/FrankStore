function ItemCarrinho ({ produto }) {
    const subtotal = produto.precoUnitario * produto.quantidade;

    return (
        <li className="item-carrinho">
            <span>{produto.nome}</span>
            <span>Qtd: {produto.quantidade}</span>
            <span>Unitário: R$ {produto.precoUnitario.toFixed(2)}</span>
            <span>Subtotal: R$ {subtotal.toFixed(2)}</span>
        </li>
    )
}

export default ItemCarrinho;