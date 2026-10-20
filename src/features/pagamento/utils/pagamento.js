export function todosDigitosIguais(numeroCartao) {
    const digitos = numeroCartao.replace(/\D/g, ""); //parte que remove espaços e hífens
    return digitos.split("").every((digito) =>
        digito === digitos[0])
}