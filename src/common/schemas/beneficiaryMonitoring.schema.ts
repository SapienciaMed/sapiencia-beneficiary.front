import * as yup from "yup";

export const consultBeneficiaryMonitoringSchema = yup.object({
    ccBeneficiary : yup.number().required("Debes ingresar el numero de cedula del beneficiario"),
    founds : yup.number().optional(),
    period : yup.number().optional(),
    modality : yup.number().optional(),
    creditStatus : yup.number().optional()
})