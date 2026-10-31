function normalizar (texto) {
    return texto 
        .trim()
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

export function filtrarProdutos(produtos, termo) {
    const termoNormalizado = normalizar(termo)

    if(termoNormalizado === "") {
        return produtos;
    } 

    return produtos.filter((produto) => 
    normalizar(produto.nome).includes(termoNormalizado)
    );
}