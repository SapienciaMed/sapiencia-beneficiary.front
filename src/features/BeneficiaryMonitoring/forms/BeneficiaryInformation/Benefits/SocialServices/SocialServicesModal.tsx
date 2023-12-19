import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { memo, useEffect, useRef, useState } from "react";
import { ApiResponse } from "../../../../../../common/utils/api-response";
import useCrudService from "../../../../../../common/hooks/crud-service.hook";
import { urlApiBeneficiary } from "../../../../../../common/utils/base-url";
import { useForm } from "react-hook-form";
import Svgs from "../../../../../../public/images/icons/svgs";
import { OverlayPanel } from "primereact/overlaypanel";
import { Button } from "primereact/button";
import { useParams } from "react-router-dom";

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

  const getInformationSocialServices = async (periodId, foundId) => {
    try {
      if (foundId === undefined) {
        foundId = foundId;
      }
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

  const getFormats = () => {};

  const op = useRef(null);
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
          background: "#F8F9FA",
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
                <Button
                  type="button"
                  style={{ backgroundColor: "white", borderColor: "white" }}
                  icon={<Svgs svg="view" />}
                  onClick={(e) => op.current.toggle(e)}
                />

                <OverlayPanel ref={op}></OverlayPanel>
              </div>
            }
          ></Column>
        </DataTable>
      </div>
    </>
  );
};

export default memo(SocialServicesModal);
