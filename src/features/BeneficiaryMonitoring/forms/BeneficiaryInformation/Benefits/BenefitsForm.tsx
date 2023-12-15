import { memo } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useParams } from "react-router-dom";
import Svgs from "../../../../../public/images/icons/svgs";
import { getDataBenefits } from "../../../hooks/BeneficiaryInformation/Benefits.hook";
import * as Icons from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import {
  ButtonComponent,
  FormComponent,
  SelectComponent,
} from "../../../../../common/components/Form";
import { ITableAction } from "../../../../../common/interfaces/table.interfaces";
const BenefitsForm = () => {
  const {
    founds,
    modalitys,
    InformationBenefits,
    totalBenefits,
    control,
    errors,
    handleClean,
    isValid,
    submitDisabled,
    onSubmit,
    tableView,
    showSocialServices,
  } = getDataBenefits();

  let noOrder = 0;

  const { foundId } = useParams();
  return (
    <div
      style={{
        border: "1px solid #e0e0e0",
        borderRadius: "15px",
        opacity: 1,
        padding: "1em",
        margin: "1.5em 0em",
      }}
      className="mt-24px"
    >
      <FormComponent
        id="BenefitsForm"
        className="form-signIn"
        action={onSubmit}
      >
        <div
          style={{
            border: "1px solid #e0e0e0",
            borderRadius: "15px",
            opacity: 1,
            padding: "1em",
            margin: "1.5em 0em",
          }}
        >
          <div className="grid-form-4-container">
            <SelectComponent
              idInput="founds"
              control={control}
              errors={errors}
              data={founds}
              label={<>Fondo / Programa</>}
              className="select-basic medium"
              classNameLabel="text-black big"
              placeholder="Seleccionar"
              filter
            />
            <SelectComponent
              idInput="modality"
              control={control}
              errors={errors}
              data={modalitys}
              label={<>Modalidad</>}
              className="select-basic medium"
              classNameLabel="text-black big"
              placeholder="Seleccionar"
              filter
            />
          </div>
          <div className="button-save-container-display mr-24px">
            <ButtonComponent
              value="Limpiar"
              className="button-clean"
              type="button"
              action={handleClean}
            />

            <ButtonComponent
              value="Buscar"
              className={`button-save ${
                !isValid || submitDisabled ? "disabled-black" : ""
              } big`}
              type="submit"
              disabled={!isValid || submitDisabled}
            />
          </div>
        </div>
      </FormComponent>

      {tableView && (
        <>
          <div className="container-sections-forms mt-24px ml-16px mr-16px p-0">
            <div
              className="bold mt-24px ml-16px mr-16px p-0"
              style={{ fontWeight: 500, fontSize: "29px", color: "#000000" }}
            >
              Giros realizados al beneficiario
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
              Giros proyectados al beneficiario
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
    </div>
  );
};

export default memo(BenefitsForm);
