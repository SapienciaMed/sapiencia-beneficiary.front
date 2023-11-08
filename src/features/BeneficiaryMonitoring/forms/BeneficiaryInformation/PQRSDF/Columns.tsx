import { IPQRSDFTable } from "../../../../../common/interfaces/BeneficiaryInformation/PQRSDF.interface";
import { ITableElement } from "../../../../../common/interfaces/table.interfaces";

export const tableColumns: ITableElement<IPQRSDFTable>[] = [
  {
    fieldName: "filingNumber",
    header: "No.PQRSDF",
  },
  {
    fieldName: "createdAt",
    header: "Fecha radicado",
  },
  {
    fieldName: "program.prg_descripcion",
    header: "Programa",
  },
  {
    fieldName: "requestSubject.aso_asunto",
    header: "Asunto",
  },
  {
    fieldName: "status.lep_estado",
    header: "Estado",
  },
];
