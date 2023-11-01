import { IAttentionsTable } from "../../../../../common/interfaces/BeneficiaryInformation/Attentions.interface";
import { ITableElement } from "../../../../../common/interfaces/table.interfaces";

export const tableColumns: ITableElement<IAttentionsTable>[] = [
  {
    fieldName: "RegistrationDate",
    header: "Fecha registro",
  },
  {
    fieldName: "Typeofrequest",
    header: "Tipo de solicitud",
  },
  {
    fieldName: "dependence",
    header: "Dependencia",
  },
  {
    fieldName: "program",
    header: "Programa",
  },
  {
    fieldName: "ApplicationTopic",
    header: "Tema de solicitud",
  },
];
