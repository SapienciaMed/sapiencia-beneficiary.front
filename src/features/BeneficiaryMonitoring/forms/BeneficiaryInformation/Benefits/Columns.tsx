import { IAttentionsTable } from "../../../../../common/interfaces/BeneficiaryInformation/Attentions.interface";
import { ITableElement } from "../../../../../common/interfaces/table.interfaces";

export const tableColumns: ITableElement<IAttentionsTable>[] = [
  {
    fieldName: "RegistrationDate",
    header: "Periodo",
  },
  {
    fieldName: "Typeofrequest",
    header: "Estado",
  },
  {
    fieldName: "dependence",
    header: "Servicio social",
  },
  {
    fieldName: "program",
    header: "Giro matrícula",
  },
  {
    fieldName: "ApplicationTopic",
    header: "Giro sostenimiento",
  },
  {
    fieldName: "ApplicationTopic",
    header: "Estado del giro",
  },
  {
    fieldName: "ApplicationTopic",
    header: "Total girado",
  },
];
