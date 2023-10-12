import { IBeneficiaryTable } from "../../../../common/interfaces/beneficiaryMonitoring.interface";
import { ITableElement } from "../../../../common/interfaces/table.interfaces";
export const tableColumns: ITableElement<IBeneficiaryTable>[]=[
    {
        fieldName: "typeDocument",
        header: "Tipo documento",
    },
    {
        fieldName: "document",
        header: "Documento de identidad",
    },
    {
        fieldName: "fullName",
        header: "Nombres y apellidos",
    },
    {
        fieldName: "found",
        header: "Fondo",
    },
    {
        fieldName: "period",
        header: "Período de selección",
    },
    {
        fieldName: "modality",
        header: "Modalidad",
    },
    {
        fieldName: "creditStatus",
        header: "Estado crédito",
    },

]