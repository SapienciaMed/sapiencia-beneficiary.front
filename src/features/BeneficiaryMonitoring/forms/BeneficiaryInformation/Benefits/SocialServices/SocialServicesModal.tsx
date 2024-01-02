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
import $ from "jquery";

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
  const [conditionalFormats, setconditionalFormats] = useState(null);

  const viewDocuments = (tipo, documento, id_periodo_giro, pseleccion) => {
    // const url = new URL(
    //   "https://fondos.sapiencia.gov.co/convocatorias/frontendrenovacionpp/uploads/index.php"
    // );

    let url =
      "https://fondos.sapiencia.gov.co/convocatorias/frontendrenovacionpp/uploads/index.php";
    let form = $(
      '<form action="' +
        url +
        '" method="post" target="_blank" style="display: none">' +
        '<input type="text" name="documento" value="' +
        documento +
        '" />' +
        '<input type="text" name="tipo" value="' +
        tipo +
        '" />' +
        '<input type="text" name="periodo" value="' +
        id_periodo_giro +
        '" />' +
        '<input type="text" name="npseleccion" value="' +
        pseleccion +
        '" />' +
        "</form>"
    );
    $("body").append(form);
    form.submit();
  };

  const getInformationSocialServices = async (periodId, foundId) => {
    try {
      if (foundId === undefined) {
        foundId = foundId;
      }
      const data = { document, foundId, periodId };

      const endpoint = "/api/v1/sapiencia/beneficiary/get-socialServices";
      const resp: ApiResponse<any> = await post(endpoint, data);
      setInformationSocialServices(resp.data[0][0]);

      return resp.data[0][0];
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getInformationSocialServices(period, found);
    getFormats();
  }, []);

  const getFormats = async () => {
    const Acta_Servicio = "Acta_Servicio";
    const Ficha_Servicio = "Ficha_Servicio";
    const Certificado_Servicio = "Certificado_Servicio";
    const Formato_Unico = "Formato_Unificado";
    const AcumulacionServicio = "AcumulacionServicio";

    const data = await getInformationSocialServices(period, found);
    if (data[0]) {
      const pseleccion = data[0]["Nombre_convocatoria_seleccionado"];
      if (period <= 10) {
        setconditionalFormats(
          <>
            <li
              style={{ listStyle: "none", cursor: "pointer" }}
              onClick={() =>
                viewDocuments(Acta_Servicio, document, period, pseleccion)
              }
            >
              Acta
            </li>
            <li
              style={{ listStyle: "none", cursor: "pointer" }}
              onClick={() =>
                viewDocuments(Ficha_Servicio, document, period, pseleccion)
              }
            >
              Ficha
            </li>
            <li
              style={{ listStyle: "none", cursor: "pointer" }}
              onClick={() =>
                viewDocuments(
                  Certificado_Servicio,
                  document,
                  period,
                  pseleccion
                )
              }
            >
              Certificado
            </li>
          </>
        );
      } else {
        if (data[0]["Realizo_servicio"] === "SI") {
          setconditionalFormats(
            <>
              <li
                style={{ listStyle: "none", cursor: "pointer" }}
                onClick={() =>
                  viewDocuments(Formato_Unico, document, period, pseleccion)
                }
              >
                Certificado
              </li>
            </>
          );
        } else {
          if (data[0]["horasAcumuladas"] >= 80) {
            setconditionalFormats(
              <>
                <li
                  style={{ listStyle: "none", cursor: "pointer" }}
                  onClick={() =>
                    viewDocuments(
                      AcumulacionServicio,
                      document,
                      period,
                      pseleccion
                    )
                  }
                >
                  Acumulación/fuerza mayor
                </li>
              </>
            );
          }
        }
      }
    }
  };

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

                <OverlayPanel ref={op}>{conditionalFormats}</OverlayPanel>
              </div>
            }
          ></Column>
        </DataTable>
      </div>
    </>
  );
};

export default memo(SocialServicesModal);
