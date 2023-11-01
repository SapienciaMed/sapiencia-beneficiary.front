import { IPQRSDFTable } from "../../../../../common/interfaces/BeneficiaryInformation/PQRSDF.interface";
import { ITableElement } from "../../../../../common/interfaces/table.interfaces";

export const tableColumns: ITableElement<IPQRSDFTable>[] = [
  {
    fieldName: "PQRSDF",
    header: "Documento de identidad",
  },
  {
    fieldName: "Datefiled",
    header: "Fecha radicado",
  },
  {
    fieldName: "Program",
    header: "Programa",
  },
  {
    fieldName: "Issue",
    header: "Asunto",
  },
  {
    fieldName: "Status",
    header: "Estado",
  },
];
