import { DateTime } from "luxon";
import { IAttentionsTable } from "../../../../../common/interfaces/BeneficiaryInformation/Attentions.interface";
import { ITableElement } from "../../../../../common/interfaces/table.interfaces";

export const tableColumnsAttentions: ITableElement<IAttentionsTable>[] = [
  {
    fieldName: "createdAt",
    header: "Fecha registro",
    renderCell: (row) => {
      const createAt = DateTime.fromISO(row.createdAt)
        .setLocale("fr")
        .toLocaleString(DateTime.DATE_SHORT);

      return <>{createAt}</>;
    },
  },
  {
    fieldName: "attentionRequestType.description",
    header: "Tipo de solicitud",
  },
  {
    fieldName: "dependency.dep_descripcion",
    header: "Dependencia",
  },
  {
    fieldName: "program.prg_descripcion",
    header: "Programa",
  },
  {
    fieldName: "requestSubjectType.aso_asunto",
    header: "Tema de solicitud",
  },
];
