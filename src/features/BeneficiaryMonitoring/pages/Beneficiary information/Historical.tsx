import React from "react";
import {
  ButtonComponent,
  FormComponent,
  InputComponent,
  SelectComponent,
} from "../../../../common/components/Form";
import { HistoricalHook } from "../../hooks/BeneficiaryInformation/Historical.hook";
import TableComponent from "../../../../common/components/table.component";
import { IHistorical } from "../../../../common/interfaces/BeneficiaryInformation/Historical.interface";
import { ITableElement } from "../../../../common/interfaces/table.interfaces";
import { useGetAllFounds } from "../../hooks/listsSapiencia/getFounds.hook";
import { useGetAllPeriod } from "../../hooks/listsSapiencia/getPeriods.hook";
import { getAllModalitys } from "../../hooks/listsSapiencia/getModality.hook";

function Historical() {
  const {
    onSubmit,
    control,
    handleClean,
    handleChange,
    register,
    errors,
    isValid,
    submitDisabled,
    tableView,
    setPaginateData,
    tableComponentRef,
    urlGetHistorical,
    tableActions,
  } = HistoricalHook();
  const { founds } = useGetAllFounds();
  const { periods } = useGetAllPeriod();
  const { modalitys } = getAllModalitys();
  
  const tableColumns: ITableElement<IHistorical>[] = [
    {
      fieldName: "date",
      header: "Fecha y Hora",
    },
    {
      fieldName: "period",
      header: "Periodo",
    },
    {
      fieldName: "information",
      header: "Informacion",
    },
    {
      fieldName: "TypeChange",
      header: "Tipo de cambio",
    },
  ];
  return (
    <div className="container-sections-forms mt-24px ml-16px mr-14px p-0">
      <div className="text-black large bold grid-span-2-columns pb-14px mt-24px ml-24px">
        Histórico beneficiario
      </div>
      <FormComponent
        id="HistoricalForm"
        className="form-signIn"
        action={onSubmit}
      >
        <div className="container-sections-forms ml-20px mr-20px">
          <div className="grid-form-4-container gap-25  mr-16px p-0">
            <InputComponent
              idInput="LegalizationPeriod"
              label={<>Periodo legalizacion</>}
              typeInput="number"
              className="input-basic medium"
              classNameLabel="text-black big bold"
            />
            <InputComponent
              idInput="Status"
              label={<>Estado</>}
              typeInput="number"
              className="input-basic medium"
              classNameLabel="text-black big bold"
            />

            <SelectComponent
              idInput="periodId"
              control={control}
              label={<>Periodo</>}
              className="select-basic medium"
              classNameLabel="text-black big bold"
              placeholder="Seleccionar"
              filter
              data={periods}
            />

            <SelectComponent
              idInput="programId"
              control={control}
              label={<>Fondo</>}
              className="select-basic medium"
              classNameLabel="text-black big bold"
              placeholder="Seleccionar"
              filter
              data={founds}
            />
          </div>
          <div className="grid-form-3-container gap-25 mt-16px  mr-16px p-0">
            <SelectComponent
              idInput="modalityID"
              control={control}
              label={<>Modalidad</>}
              className="select-basic medium"
              classNameLabel="text-black big bold"
              placeholder="Seleccionar"
              filter
              data={modalitys}
            />

            <InputComponent
              idInput="NumberofSpecialSuspensions"
              label={<>Cantidad de suspensiones especiales</>}
              typeInput="number"
              className="input-basic medium"
              classNameLabel="text-black big bold"
            />

            <InputComponent
              idInput="NumberofTemporarySuspensions"
              label={<>Cantidad de suspensiones temporales</>}
              typeInput="number"
              className="input-basic medium"
              classNameLabel="text-black big bold"
            />
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
        </div>
      </FormComponent>

      {tableView && (
        <>
          <div className="container-sections-forms ml-20px mr-20px">
            <TableComponent
              setPaginateData={setPaginateData}
              ref={tableComponentRef}
              url={urlGetHistorical}
              columns={tableColumns}
              actions={tableActions}
              isShowModal={true}
              emptyMessage="Resultado en la búsqueda"
              descriptionModalNoResult="No se generó resultado en la búsqueda"
              titleMessageModalNoResult="Resultado de búsqueda"
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Historical;
