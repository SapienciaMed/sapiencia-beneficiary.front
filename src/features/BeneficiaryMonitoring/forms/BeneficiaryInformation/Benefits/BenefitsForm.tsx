import { memo } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useParams } from "react-router-dom";
import Svgs from "../../../../../public/images/icons/svgs";
import { getDataBenefits } from "../../../hooks/BeneficiaryInformation/Benefits.hook";
import {
  ButtonComponent,
  FormComponent,
  SelectComponent,
} from "../../../../../common/components/Form";
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
  } = getDataBenefits();

  const { foundId } = useParams();
  return (
    <div className="container-sections-forms mt-24px ml-16px mr-16px p-0">
      <FormComponent
        id="BenefitsForm"
        className="form-signIn"
        action={onSubmit}
      >
        <div className=" container-sections-forms ml-20px mr-20px">
          <div className="grid-form-4-container gap-25 mt-14px">
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
              className="select-basic small"
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
            <DataTable
              className="spc-table full-height"
              value={InformationBenefits}
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
              {foundId == "1" || foundId == "2" ? (
                <Column
                  field=""
                  header="Servicio social"
                  body={
                    <p className="pointer">
                      <Svgs svg="view" />
                    </p>
                  }
                  style={{ fontSize: "0.8em" }}
                ></Column>
              ) : null}
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
                field="TotalOrder"
                header="Total girado"
                style={{ fontSize: "0.8em" }}
              ></Column>
              <Column
                field="StatusOrder"
                header="Estado del giro"
                style={{ fontSize: "0.8em" }}
              ></Column>
              <Column
                field="DateOrder"
                header="Fecha de giro"
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

            <DataTable
              className="spc-table full-height"
              value={InformationBenefits}
              showGridlines
              tableStyle={{ minWidth: "50rem" }}
            >
              <Column
                field="StatusOrder"
                header="No.Giro"
                style={{ fontSize: "0.8em" }}
              ></Column>
              <Column
                field="StatusOrder"
                header="Periodo"
                style={{ fontSize: "0.8em" }}
              ></Column>
              <Column
                field="StatusOrder"
                header="Estado"
                style={{ fontSize: "0.8em" }}
              ></Column>
              <Column
                field="StatusOrder"
                header="Giro matricula"
                style={{ fontSize: "0.8em" }}
              ></Column>
              <Column
                field="StatusOrder"
                header="Giro sostenimiento"
                style={{ fontSize: "0.8em" }}
              ></Column>
              <Column
                field="StatusOrder"
                header="Total girado"
                style={{ fontSize: "0.8em" }}
              ></Column>
            </DataTable>
          </div>
        </>
      )}
    </div>
  );
};

export default memo(BenefitsForm);
