function ItemCarrinho ({ produto }) {
    const subtotal = produto.precoUnitario * produto.quantidade;

    return (
        <li className="item-carrinho">
            <img 
                src={produto.imagem}
                alt={produto.nome}
                className="item-carrinho-imagem"
            />
            <div className="item-carrinho-info">
                <p className="item-carrinho-nome">{produto.nome}</p>
                <p className="item-carrinho-qtd">Qtd: {produto.quantidade}</p>
            </div>
            <div className="item-carrinho-precos">
                <p className="item-carrinho-unitario">Unitário: R$ {produto.precoUnitario.toFixed(2)}</p>
                <p className="item-carrinho-subtotal">Subtotal: R$ {subtotal.toFixed(2)}</p>
            </div>
        </li>
    )
}

export default ItemCarrinho;