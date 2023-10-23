import * as yup from "yup";

export const consultAttentioschema = yup.object({
  registrationDate: yup
    .date()
    .required("Completar información")
    .typeError("Fecha inválida"),
    Program: yup.number().required("Completar información")
});
