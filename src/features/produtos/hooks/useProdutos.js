import { useEffect, useState } from "react";
import { buscarProdutos } from "../services/api";

export function useProdutos() {
    const [produtos, setProdutos] = useState([]);
    const [carregando, setCarregando] = useState(true);
    const [erro, setErro] = useState(null);

    useEffect(() => {
        async function carregar() {
            try {
                const dados = await buscarProdutos();
                setProdutos(dados);
            } catch {
                setErro("Não foi possível carregar os podutos. Verifique se a API está funcionando. ");
            } finally {
                setCarregando(false);
            }
        }

        carregar();
    }, []);

    return { produtos, carregando, erro };
}