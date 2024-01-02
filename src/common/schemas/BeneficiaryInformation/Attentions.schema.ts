import * as yup from "yup";

export const consultAttentioschema = yup.object({
  createdAt: yup
    .date()
    .optional()
    .typeError("Fecha inválida"),
  programId: yup.number().optional().typeError("Seleccione un programa")
});
