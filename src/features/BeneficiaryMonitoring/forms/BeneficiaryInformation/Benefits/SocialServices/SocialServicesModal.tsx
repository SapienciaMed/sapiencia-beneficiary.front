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
  nroOrder,
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

  useEffect(() => {
    getInformationSocialServices(period, found);
  }, []);

  return (
    <>
      <div
        style={{
          width: "100%",
          wordWrap: "break-word",
          overflow: "hidden",
          whiteSpace: "nowrap",
          alignItems: "flex-start",
          border: "1px solid #e0e0e0",
          borderRadius: "15px",
        }}
      >
        <DataTable
          value={InformationSocialServices}
          showGridlines
          emptyMessage={"No se generó resultado en la búsqueda"}
          tableStyle={{
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          <Column
            field="Nombre_convocatoria_seleccionado"
            header="Periodo de selección"
            style={{
              fontSize: "14px",
              fontWeight: "400",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          ></Column>
          <Column
            header="Nro.Giro"
            style={{
              fontSize: "14px",
              fontWeight: "400",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
            body={nroOrder}
          ></Column>
          <Column
            header="Periodo giro"
            style={{
              fontSize: "14px",
              fontWeight: "400",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
            body={period_name}
          ></Column>
        </DataTable>
        <DataTable
          value={InformationSocialServices}
          showGridlines
          emptyMessage={"No se generó resultado en la búsqueda"}
          tableStyle={{
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          <Column
            field="Realizo_servicio"
            header="Realizo Servicio"
            style={{
              fontSize: "14px",
              fontWeight: "400",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          ></Column>
          <Column
            field="Horas_servicio_realizo"
            header="Horas presentadas"
            style={{
              fontSize: "14px",
              fontWeight: "400",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          ></Column>
          <Column
            field="horasAcumuladas"
            header=" Horas acumuladas"
            style={{
              fontSize: "14px",
              fontWeight: "400",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          ></Column>
        </DataTable>
        <DataTable
          value={InformationSocialServices}
          showGridlines
          emptyMessage={"No se generó resultado en la búsqueda"}
          tableStyle={{
            fontSize: "14px",
            fontWeight: "500",
          }}
        >
          <Column
            field="TotalHoras"
            header="Horas adeuda"
            style={{
              fontSize: "14px",
              fontWeight: "400",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
            body={""}
          ></Column>
          <Column
            header="Estado crédito"
            style={{
              fontSize: "14px",
              fontWeight: "400",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
            body={statusCredit}
          ></Column>
          <Column
            header="Formato"
            style={{
              fontSize: "14px",
              fontWeight: "400",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
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
