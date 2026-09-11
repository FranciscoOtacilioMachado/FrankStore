import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { todosDigitosIguais } from "../utils/pagamento"

export function usePagamento() {
    const [processando, setProcessando] = useState(false)
    const navigate = useNavigate();

    async function processarPagamento(dados) {
        console.log("até está correto")
        setProcessando(true);

        await new Promise((resolve) => setTimeout(resolve, 1500));

        const falhou = todosDigitosIguais(dados.numeroCartao);

        setProcessando(false)

        if(falhou) {
            navigate("/erroPagamento")
        }else {
            navigate("/sucesso")
        }        
    }

    return {
        processando, processarPagamento
    }
}