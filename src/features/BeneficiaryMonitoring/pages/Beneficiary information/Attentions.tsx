import React from "react";
import {
  ButtonComponent,
  FormComponent,
  SelectComponent,
} from "../../../../common/components/Form";
import { DatePickerComponent } from "../../../../common/components/Form/input-date.component";
import { AttentionsHook } from "../../hooks/BeneficiaryInformation/Attentions.hook";
import TableComponent from "../../../../common/components/table.component";
import { tableColumnsAttentions } from "../../forms/BeneficiaryInformation/Attentions/Columns";

const Attentions = () => {
  const {
    downloadCollection,
    onSubmit,
    handleClean,
    register,
    control,
    tableView,
    submitDisabled,
    errors,
    tableActions,
    isValid,
    programs,
    setPaginateData,
    tableComponentRef,
    url,
  } = AttentionsHook();
  return (
    <>
      <div className="container-sections-forms mt-24px ml-16px mr-14px p-0">
        <div className="text-black large bold grid-span-4-columns pb-14px mt-24px ml-24px">
          Atenciones del beneficiario
        </div>
        <div className="container-sections-forms ml-24px mr-24px mt-24px mb-24px">
          <FormComponent
            id="PQRSDFForm"
            className="form-signIn"
            action={onSubmit}
          >
            <div className="grid-form-5-container">
              <DatePickerComponent
                idInput="createdAt"
                errors={errors}
                control={control}
                label={<>Fecha registro</>}
                classNameLabel="text-black big bold"
                className="dataPicker-basic  medium "
                dateFormat="dd/mm/yy"
                maxDate={new Date()}
              />
              <SelectComponent
                idInput="programId"
                control={control}
                errors={errors}
                data={programs}
                label={<>Programa</>}
                className="select-basic medium"
                classNameLabel="text-black big bold"
                placeholder="Seleccionar"
                filter
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
                className={`button-save big`}
                type="submit"
                // disabled={!isValid || submitDisabled}
              />
            </div>
          </FormComponent>
        </div>
        {tableView && (
          <>
            <div className="container-sections-forms ml-20px mr-20px">
              <TableComponent
                setPaginateData={setPaginateData}
                ref={tableComponentRef}
                url={url}
                columns={tableColumnsAttentions}
                actions={tableActions}
                isShowModal={true}
                emptyMessage="Resultado en la búsqueda"
                descriptionModalNoResult="No se generó resultado en la búsqueda"
                titleMessageModalNoResult="Resultado de búsqueda"
                onResult={(rows) => {
                  console.log(rows);
                }}
              />
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Attentions;
