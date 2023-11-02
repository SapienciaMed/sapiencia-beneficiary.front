import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { memo } from "react";

const SocialServicesModal = (information) => {
  return (
    <>
      <div>
        <DataTable
          value={information}
          showGridlines
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column
            field=""
            header="Periodo de selección"
            style={{ fontSize: "0.8em" }}
          ></Column>
          <Column
            field=""
            header="No.giro"
            style={{ fontSize: "0.8em" }}
          ></Column>
          <Column
            field=""
            header="Periodo giro"
            style={{ fontSize: "0.8em" }}
          ></Column>
        </DataTable>
      </div>
      <div>
        <DataTable
          value={information}
          showGridlines
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column
            field=""
            header="Realizo Servicio"
            style={{ fontSize: "0.8em" }}
          ></Column>
          <Column
            field=""
            header="Horas presentadas"
            style={{ fontSize: "0.8em" }}
          ></Column>
          <Column
            field=""
            header=" Horas acumuladas"
            style={{ fontSize: "0.8em" }}
          ></Column>
        </DataTable>
      </div>
      <div>
        <DataTable
          value={information}
          showGridlines
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column
            field=""
            header="Horas adeuda"
            style={{ fontSize: "0.8em" }}
          ></Column>
          <Column
            field=""
            header="Estado crédito"
            style={{ fontSize: "0.8em" }}
          ></Column>
          <Column
            field=""
            header="Formato"
            style={{ fontSize: "0.8em" }}
          ></Column>
        </DataTable>
      </div>
    </>
  );
};

export default memo(SocialServicesModal);
