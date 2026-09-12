import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { schemaPagamento } from "../utils/schemaPagamento"
import { usePagamento } from "../hooks/usePagamento"
import ResumoCompra from "../components/ResumoCompra";
import { produtos } from "../data/produtos";

function Pagamento() {
    const {
        register, 
        handleSubmit,
        formState: {errors},
    } = useForm({
        resolver: zodResolver(schemaPagamento),
    });

    const { processando, processarPagamento} = usePagamento();

    return (
        <main>
            <h1>Pagamento</h1>

            <ResumoCompra produtos={produtos} />

            <form onSubmit={handleSubmit(processarPagamento)} noValidate>
                <div>
                    <label htmlFor="titular">
                        Titular do cartão
                    </label>
                    <input 
                        id="titular" 
                        type="text" {...register("titular")} />
                    {errors.titular && <p role="alert">{errors.titular.message}</p>
                    }
                </div>

                <div>
                    <label htmlFor="numeroCartao">Numero do cartão </label>
                    <input 
                        type="text" 
                        id="numeroCartao" 
                        {...register("numeroCartao")}
                    />
                    {errors.numeroCartao && (
                        <p role="alert">
                            {errors.numeroCartao.message}</p>
                        )}
                </div>

                <div>
                    <label htmlFor="validade">Validade (MM/AA)</label>
                    <input 
                        type="text"
                        id="validade"
                        placeholder="MM/AA"
                        {...register("validade")} 
                    />
                    {errors.validade && 
                        <p role="alert">
                            {errors.validade.message}
                        </p>}
                </div>

                <div>
                    <label htmlFor="cvv">CVV</label>
                    <input 
                    type="text"
                    id="cvv"
                    {...register("cvv")} 
                />
                    {errors.cvv && 
                    <p role="alert">
                        {errors.cvv.message}    
                    </p>}
                </div>
                
                <button type="submit" disabled={processando}>
                    {processando ? "Processando compra..." : "Pagar"}
                </button>

            </form>
        </main>
    )
}

export default Pagamento