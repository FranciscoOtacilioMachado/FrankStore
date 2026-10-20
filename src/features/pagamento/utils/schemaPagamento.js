import { z } from "zod"

export const schemaPagamento = z.object ({
    titular: z
        .string()
        .trim()
        .min(1, "Informe o nome do titular"),

    numeroCartao: z
        .string()
        .transform((valor) => valor.replace(/\D/g, ""))
        .refine((valor) => valor.length === 16, {
            message: "O cartão deve ter 16 digitos",
        }),
    
    validade: z
        .string()
        .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, "Formato inválido, use MM/AA"),

    cvv: z
        .string()
        .regex(/^\d{3}$/, "CVV deve ter 3 dígitos" )
})