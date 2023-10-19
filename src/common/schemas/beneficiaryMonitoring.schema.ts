import * as yup from "yup";

export const consultBeneficiaryMonitoringSchema = yup.object({
    ccBeneficiary : yup.string().optional().typeError("Ingresa la cedula del beneficiario"),
    founds : yup.number().optional().nullable(),
    period : yup.number().optional().nullable(),
    modality : yup.number().optional().nullable(),
    creditStatus : yup.number().optional().nullable()
})