import * as yup from "yup";

export const consultPQRSFSchema = yup.object({
    PQRSDF: yup.string().required("Ingrese la PQRSDF"),
    SubjectType: yup.number().required("Seleccion el tipo de asunto"),
    Program: yup.number().optional().nullable(),
    Issue: yup.number().optional().nullable()
})