import { memo, useState } from "react";
import {
  ButtonComponent,
  FormComponent,
  InputComponent,
  SelectComponent,
} from "../../../../common/components/Form";
import TableComponent from "../../../../common/components/table.component";
import Svgs from "../../../../public/images/icons/svgs";
import { tableColumns } from "./columns";
import { ProgressSpinner } from 'primereact/progressspinner';

const BeneficiaryMonitoringForm = ({
  tableComponentRef,
  tableView,
  onSubmit,
  tableActions,
  control,
  errors,
  isValid,
  handleClean,
  submitDisabled,
  register,
  setPaginateData,
  handleChange,
  validateActionAccess,
  downloadCollection,
  founds,
  periods,
  modalitys,
  creditsStatus,
  urlGetConsultBeneficiary,
  loading
}) => {
  

  return (
    <div className="container-sections-forms mt-24px ml-16px mr-16px p-0">
      <FormComponent
        id="BeneficiaryForm"
        className="form-signIn"
        action={onSubmit}
      >
        <div className=" container-sections-forms ml-20px mr-20px">
          <div className="text-black large grid-span-4-columns pb-14px">
            Seguimiento Beneficiario
          </div>
          <div className="grid-form-4-container gap-25">
            <InputComponent
              idInput="ccBeneficiary"
              label={<>Número de documento</>}
              register={register}
              typeInput="number"
              errors={errors}
              className="input-basic medium"
              classNameLabel="text-black big bold"
              onChange={handleChange}
            />
          </div>
          <div className="grid-form-4-container gap-25 mt-14px">
            <SelectComponent
              idInput="founds"
              control={control}
              errors={errors}
              data={founds}
              label={<>Fondo</>}
              className="select-basic medium"
              classNameLabel="text-black big bold"
              placeholder="Seleccionar"
              filter
            />
            <SelectComponent
              idInput="period"
              control={control}
              errors={errors}
              data={periods}
              label={<>Perido de selección</>}
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
            <SelectComponent
              idInput="creditStatus"
              control={control}
              errors={errors}
              data={creditsStatus}
              label={<>Estado crédito</>}
              className="select-basic medium"
              classNameLabel="text-black big bold"
              placeholder="Seleccionar"
              filter
            />
          </div>
        </div>
        <div className="button-save-container-display mr-24px">
          <ButtonComponent
            value="Limpiar campos"
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
          <div className="container-sections-forms ml-20px mr-20px">
            <TableComponent
              setPaginateData={setPaginateData}
              ref={tableComponentRef}
              url={urlGetConsultBeneficiary} 
              columns={tableColumns}
              actions={tableActions}
              isShowModal={true}
              emptyMessage="Resultado en la búsqueda"
              descriptionModalNoResult="No se generó resultado en la búsqueda"
              titleMessageModalNoResult="Resultado de búsqueda"
            /> 
          </div>
          <div
            style={{
              height: "1px",
              margin: "0 20px",
              backgroundColor: "#e0e0e0",
            }}
          ></div>
          <div className="button-save-container-display mr-24px">
            <ButtonComponent
              value={
                <>
                  <div className="container-buttonText">
                    <span>Descargar</span>
                    <Svgs svg="excel" width={23.593} height={28.505} />
                  </div>
                </>
              }
              className="button-download large "
              action={downloadCollection}
            />
            <ButtonComponent
              value="Cerrar"
              className="button-save big"
              action={handleClean}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default memo(BeneficiaryMonitoringForm);
