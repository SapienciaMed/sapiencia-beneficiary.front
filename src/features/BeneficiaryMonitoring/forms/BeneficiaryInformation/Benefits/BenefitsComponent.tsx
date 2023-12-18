import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";
import { getDataComponentsBeneftis } from "../../../hooks/BeneficiaryInformation/BenefitsComponent.hook";
import Svgs from "../../../../../public/images/icons/svgs";

const BenefitsComponent = ({ foundId, foundName }) => {
  const { InformationBenefits, totalBenefits, showSocialServices, view } =
    getDataComponentsBeneftis(foundId);
  return (
    <>
      {view && (
        <>
          <div className="container-sections-forms mt-24px ml-16px mr-16px p-0">
            <div
              className="bold mt-24px ml-16px mr-16px p-0"
              style={{ fontWeight: 500, fontSize: "29px", color: "#000000" }}
            >
              Giros realizados al beneficiario fondo/programa {foundName}
            </div>
            <p className="button-save-container-display mr-24px text-black bold medium">
              Total de resultados &nbsp;
              <div className="text-three bold big">{totalBenefits}</div>
            </p>
            <div className="spc-common-table">
              <DataTable
                value={InformationBenefits}
                showGridlines
                tableStyle={{
                  fontSize: "14px",
                  minWidth: "50rem",
                  fontWeight: "500",
                  marginTop: "24px",
                  marginLeft: "16px",
                  marginRight: "16px",
                }}
                emptyMessage={"No se generó resultado en la búsqueda"}
              >
                <Column
                  field="calculatePeriodName"
                  header="Periodo"
                  style={{ fontSize: "14px", fontWeight: "400" }}
                ></Column>
                <Column
                  field="statusCredit"
                  header="Estado"
                  style={{ fontSize: "14px", fontWeight: "400" }}
                ></Column>
                {foundId == "1" || foundId == "2" ? (
                  <Column
                    field=""
                    header="Servicio social"
                    body={(row) => (
                      <div
                        onClick={() =>
                          showSocialServices(
                            row.calculatePeriod,
                            row.calculatePeriodName,
                            row.statusCredit,
                            row.NumberPeriodCalculateProjection
                          )
                        }
                        className="pointer"
                      >
                        <Svgs svg="view" />
                      </div>
                    )}
                    style={{ fontSize: "14px", fontWeight: "400" }}
                  ></Column>
                ) : null}
                <Column
                  field="OrderEnrollment"
                  header="Giro matrícula"
                  style={{ fontSize: "14px", fontWeight: "400" }}
                ></Column>
                <Column
                  field="OrderSustenance"
                  header="Giro sostenimiento"
                  style={{ fontSize: "14px", fontWeight: "400" }}
                ></Column>
                <Column
                  field="OrderTotal"
                  header="Total girado"
                  style={{ fontSize: "14px", fontWeight: "400" }}
                ></Column>
              </DataTable>
            </div>
          </div>
          <div className="container-sections-forms mt-24px ml-16px mr-16px p-0">
            <div
              className="bold mt-24px ml-16px mr-16px p-0"
              style={{
                fontWeight: 500,
                fontSize: "29px",
                color: "#000000",
              }}
            >
              Giros proyectados al beneficiario fondo/programa {foundName}
            </div>
            <p className="button-save-container-display mr-24px text-black bold medium">
              Total de resultados &nbsp;
              <div className="text-three bold big">{totalBenefits}</div>
            </p>
            <div className="spc-common-table">
              <DataTable
                value={InformationBenefits}
                showGridlines
                tableStyle={{
                  fontSize: "14px",
                  minWidth: "50rem",
                  fontWeight: "500",
                  marginTop: "24px",
                  marginLeft: "16px",
                  marginRight: "16px",
                }}
                emptyMessage={"No se generó resultado en la búsqueda"}
              >
                <Column
                  field="NumberPeriodCalculateProjection"
                  header="Nro.Giro"
                  style={{ fontSize: "14px", fontWeight: "400" }}
                ></Column>
                <Column
                  field="PeriodCalculateProjection"
                  header="Periodo"
                  style={{ fontSize: "14px", fontWeight: "400" }}
                ></Column>
                <Column
                  field="statusCredit"
                  header="Estado"
                  style={{ fontSize: "14px", fontWeight: "400" }}
                ></Column>
                <Column
                  field="ProjectionEnrollment"
                  header="Giro matrícula"
                  style={{ fontSize: "14px", fontWeight: "400" }}
                ></Column>
                <Column
                  field="ProjectionSustenance"
                  header="Giro sostenimiento"
                  style={{ fontSize: "14px", fontWeight: "400" }}
                ></Column>
                <Column
                  field="TotalProjection"
                  header="Total girado"
                  style={{ fontSize: "14px", fontWeight: "400" }}
                ></Column>
              </DataTable>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BenefitsComponent;
