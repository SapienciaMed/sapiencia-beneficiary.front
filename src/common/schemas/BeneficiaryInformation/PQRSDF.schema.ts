import * as yup from "yup";

export const consultPQRSFSchema = yup.object({
    filingNumber: yup.string().optional().nullable(),
    requestType: yup.number().optional().nullable(),
    programId: yup.number().optional().nullable(),
})