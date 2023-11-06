import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { memo, useEffect, useState } from "react";
import { ApiResponse } from "../../../../../../common/utils/api-response";
import useCrudService from "../../../../../../common/hooks/crud-service.hook";
import { urlApiBeneficiary } from "../../../../../../common/utils/base-url";

const SocialServicesModal = ({ period, found, modality }) => {
  const [InformationSocialServices, setInformationSocialServices] =
    useState(null);
  const { post } = useCrudService(urlApiBeneficiary);
  const getInformationSocialSerices = async () => {
    try {
      const data = { document, period, found, modality };
      console.log(data);
      const endpoint =
        "/api/v1/sapiencia/beneficiary/getSocialServicesByBeneficiary";
      const resp: ApiResponse<[]> = await post(endpoint, data);
      setInformationSocialServices(resp.data["array"]);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getInformationSocialSerices();
  }, []);
  return (
    <>
      <div className="container-sections-forms mt-24px ml-16px mr-16px p-0">
        <div className="card-user">
          <div className="spc-common-table">
            <DataTable
              dataKey="id"
              value={InformationSocialServices}
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
          <div className="container-sections-forms mt-24px ml-16px mr-16px p-0">
            <DataTable
              value={InformationSocialServices}
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
          <div className="container-sections-forms mt-24px ml-16px mr-16px p-0">
            <DataTable
              value={InformationSocialServices}
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
        </div>
      </div>
    </>
  );
};

export default memo(SocialServicesModal);
