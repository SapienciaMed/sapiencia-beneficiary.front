import { memo, useEffect, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useParams } from "react-router-dom";
import useCrudService from "../../../../../common/hooks/crud-service.hook";
import { urlApiBeneficiary } from "../../../../../common/utils/base-url";
import { ApiResponse } from "../../../../../common/utils/api-response";
import Svgs from "../../../../../public/images/icons/svgs";
const BenefitsForm = () => {
  const [Information, setInformation] = useState(null);
  const { document, foundId } = useParams();
  const data = { page: 1, perPage: 1000, document, foundId };
  const { post } = useCrudService(urlApiBeneficiary);
  const [total, setTotal] = useState(null);

  const getInformation = async () => {
    try {
      const endpoint = "/api/v1/sapiencia/beneficiary/getBenefits";
      const resp: ApiResponse<[]> = await post(endpoint, data);
      setInformation(resp.data["array"]);
      setTotal(resp.data["array"].length);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getInformation();
  }, []);
  return (
    <div className="container-sections-forms ml-20px mr-20px">
      <div className="spc-common-table">
        <p className="header-information text-black bold medium">
          Total de resultados
        </p>
        <p className="header-information text-three bold big">{total}</p>
        <DataTable
          className="spc-table full-height"
          value={Information}
          showGridlines
          tableStyle={{ minWidth: "50rem" }}
        >
          <Column
            field="StatusOrder"
            header="Periodo"
            style={{ fontSize: "0.8em" }}
          ></Column>
          <Column
            field="status"
            header="Estado"
            style={{ fontSize: "0.8em" }}
          ></Column>
          <Column
            field=""
            header="Servicio social"
            body={<Svgs svg="view" />}
            style={{ cursor: "pointer", fontSize: "0.8em" }}
          ></Column>
          <Column
            field="OrderEnrollment"
            header="Giro matricula"
            style={{ fontSize: "0.8em" }}
          ></Column>
          <Column
            field="OrderSustenance"
            header="Giro sostenimiento"
            style={{ fontSize: "0.8em" }}
          ></Column>
          <Column
            field="StatusOrder"
            header="Estado del giro"
            style={{ fontSize: "0.8em" }}
          ></Column>
          <Column
            field="TotalOrder"
            header="Total girado"
            style={{ fontSize: "0.8em" }}
          ></Column>
          <Column
            field="DateOrder"
            header="Fecha de giro"
            style={{ fontSize: "0.8em" }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default memo(BenefitsForm);
