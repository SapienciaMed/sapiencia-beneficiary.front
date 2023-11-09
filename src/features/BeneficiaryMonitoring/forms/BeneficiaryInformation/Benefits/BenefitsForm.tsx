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
    <div className="container-sections-forms mt-24px ml-16px mr-16px p-0">
      <FormComponent
        id="BenefitsForm"
        className="form-signIn"
        action={onSubmit}
      >
        <div className=" container-sections-forms ml-20px mr-20px">
          <div className="grid-form-4-container gap-25">
            <SelectComponent
              idInput="founds"
              control={control}
              errors={errors}
              data={founds}
              label={<>Fondo / Programa</>}
              className="select-basic medium"
              classNameLabel="text-black big bold"
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
              classNameLabel="text-black big bold"
              placeholder="Seleccionar"
              filter
            />
          </div>
        </div>

        <div className="button-save-container-display mr-24px">
          <ButtonComponent
            value="Limpiar"
            className="button-clean bold"
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
      </FormComponent>

      {tableView && (
        <>
          <div className="container-sections-forms mt-24px ml-16px mr-16px p-0">
            <div className="bold mt-24px ml-16px mr-16px p-0">
              Giros realizados al beneficiario
            </div>
            <p className="button-save-container-display mr-24px text-black bold medium">
              Total de resultados &nbsp;
              <div className="text-three bold big">{totalBenefits}</div>
            </p>
            <div className="card-user">
              <div className="spc-common-table">
                <DataTable
                  value={InformationBenefits}
                  showGridlines
                  tableStyle={{ minWidth: "50rem" }}
                  emptyMessage={"No se generó resultado en la búsqueda"}
                >
                  <Column
                    field="calculatePeriodName"
                    header="Periodo"
                    style={{ fontSize: "0.8em" }}
                  ></Column>
                  <Column
                    field="statusCredit"
                    header="Estado"
                    style={{ fontSize: "0.8em" }}
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
                              row.statusCredit
                            )
                          }
                          className="pointer"
                        >
                          <Svgs svg="view" />
                        </div>
                      )}
                      style={{ fontSize: "0.8em" }}
                    ></Column>
                  ) : null}
                  <Column
                    field="OrderEnrollment"
                    header="Giro matrícula"
                    style={{ fontSize: "0.8em" }}
                  ></Column>
                  <Column
                    field="OrderSustenance"
                    header="Giro sostenimiento"
                    style={{ fontSize: "0.8em" }}
                  ></Column>
                  <Column
                    field="OrderTotal"
                    header="Total girado"
                    style={{ fontSize: "0.8em" }}
                  ></Column>
                </DataTable>
              </div>
              <div className="container-sections-forms mt-24px ml-16px mr-16px p-0">
                <div className="bold mt-24px ml-16px mr-16px p-0">
                  Giros proyectados al beneficiario
                </div>
                <p className="button-save-container-display mr-24px text-black bold medium">
                  Total de resultados &nbsp;
                  <div className="text-three bold big">{totalBenefits}</div>
                </p>
                <div className="card-user">
                  <div className="spc-common-table">
                    <DataTable
                      value={InformationBenefits}
                      showGridlines
                      tableStyle={{ minWidth: "50rem" }}
                      emptyMessage={"No se generó resultado en la búsqueda"}
                    >
                      <Column
                        field="PeriodCalculateProjection"
                        header="Periodo"
                        style={{ fontSize: "0.8em" }}
                      ></Column>
                      <Column
                        field="statusCredit"
                        header="Estado"
                        style={{ fontSize: "0.8em" }}
                      ></Column>
                      <Column
                        field="ProjectionEnrollment"
                        header="Giro matrícula"
                        style={{ fontSize: "0.8em" }}
                      ></Column>
                      <Column
                        field="ProjectionSustenance"
                        header="Giro sostenimiento"
                        style={{ fontSize: "0.8em" }}
                      ></Column>
                      <Column
                        field="TotalProjection"
                        header="Total girado"
                        style={{ fontSize: "0.8em" }}
                      ></Column>
                    </DataTable>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default memo(BenefitsForm);
