function ItemCarrinho ({ produto }) {
    const subtotal = produto.precoUnitario * produto.Quantidade;

    return (
        <li className="item-carrinho">
            <span>{produto.nome}</span>
            <span>Qtd: {produto.quantidade}</span>
            <span>Unitário: R$ {produto.precoUnitario}</span>
            <span>Subtotal: R$ {subtotal.toFixed(2)}</span>
        </li>
    )
}

export default ItemCarrinho;