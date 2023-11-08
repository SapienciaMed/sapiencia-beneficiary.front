import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { memo, useEffect, useState } from "react";
import { ApiResponse } from "../../../../../../common/utils/api-response";
import useCrudService from "../../../../../../common/hooks/crud-service.hook";
import { urlApiBeneficiary } from "../../../../../../common/utils/base-url";
import { InputComponent } from "../../../../../../common/components/Form";
import { useForm } from "react-hook-form";
import Svgs from "../../../../../../public/images/icons/svgs";
const SocialServicesModal = ({
  document,
  period,
  found,
  period_name,
  statusCredit,
}) => {
  const [InformationSocialServices, setInformationSocialServices] =
    useState(null);
  const { post } = useCrudService(urlApiBeneficiary);
  const { control, register, reset } = useForm();
  const getInformationSocialServices = async (periodId, foundId) => {
    try {
      const data = { document, foundId, periodId };
      const endpoint = "/api/v1/sapiencia/beneficiary/get-socialServices";
      const resp: ApiResponse<any> = await post(endpoint, data);
      setInformationSocialServices(resp.data[0][0]);
    } catch (error) {
      console.error(error);
    }
  };
  getInformationSocialServices(period, found);
  return (
    <>
      <div className="card-user">
        <DataTable value={InformationSocialServices} showGridlines>
          <Column
            field="Nombre_convocatoria_seleccionado"
            header="Periodo de selección"
            style={{ fontSize: "0.8em" }}
          ></Column>
          <Column
            header="Periodo giro"
            style={{ fontSize: "0.8em" }}
            body={period_name}
          ></Column>
        </DataTable>
        <DataTable value={InformationSocialServices} showGridlines>
          <Column
            field="Realizo_servicio"
            header="Realizo Servicio"
            style={{ fontSize: "0.8em" }}
          ></Column>
          <Column
            field="Horas_servicio_realizo"
            header="Horas presentadas"
            style={{ fontSize: "0.8em" }}
          ></Column>
          <Column
            field="horasAcumuladas"
            header=" Horas acumuladas"
            style={{ fontSize: "0.8em" }}
          ></Column>
        </DataTable>
        <DataTable value={InformationSocialServices} showGridlines>
          <Column
            header="Estado crédito"
            style={{ fontSize: "0.8em" }}
            body={statusCredit}
          ></Column>
          <Column
            header="Formato"
            style={{ fontSize: "0.8em" }}
            body={
              <div className="pointer">
                <Svgs svg="view" />
              </div>
            }
          ></Column>
        </DataTable>
      </div>
    </>
  );
};

export default memo(SocialServicesModal);
