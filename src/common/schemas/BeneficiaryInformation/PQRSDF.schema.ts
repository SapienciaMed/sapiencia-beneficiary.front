import * as yup from "yup";

export const consultPQRSFSchema = yup.object({
    filingNumber: yup.string().optional().max(12, "Solo se permiten 12 caracteres").nullable(),
    requestType: yup.number().optional().nullable(),
    programId: yup.number().optional().nullable(),
})