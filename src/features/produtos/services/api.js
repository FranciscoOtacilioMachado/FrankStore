const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3001";

export async function buscarProdutos() {
    const response = await fetch(`${API_URL}/produtos`);

    if(!response.ok) {
        throw new Error("Não foi possível carregar os produtos.");
    }

    return response.json();
}