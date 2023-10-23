import React from "react";
import {
  ButtonComponent,
  FormComponent,
  InputComponent,
  SelectComponent,
} from "../../../../common/components/Form";
import TableComponent from "../../../../common/components/table.component";
import Svgs from "../../../../public/images/icons/svgs";
import { PQRSDFHook } from "../../hooks/BeneficiaryInformation/PQRSDF.hook";


const PQRSDF = () => {
  const {
    onSubmit,
    handleClean,
    register,
    control,
    tableView,
    submitDisabled,
    errors,
    handleChange,
    tableActions,
    isValid
  } = PQRSDFHook();
  return (
    <>
      <div className="text-black large bold grid-span-4-columns pb-14px">
        PQRSDF presentadas por el Beneficiario
      </div>
      <FormComponent
        id="PQRSDFForm"
        className="form-signIn"
        action={onSubmit}
      > 
      <div className="grid-form-5-container gap-25 mt-24px ml-16px mr-16px p-0">
        <InputComponent
          idInput="PQRSDF"
          label={
            <>
              No.PQRSDF <span>*</span>
            </>
          }
          register={register}
          typeInput="number"
          errors={errors}
          className="input-basic medium"
          classNameLabel="text-black big bold"
          onChange={handleChange}
        />
        <SelectComponent
          idInput="SubjectType"
          control={control}
          errors={errors}
          //data={founds}
          label={<>Tipo de asunto</>}
          className="select-basic medium"
          classNameLabel="text-black big bold"
          placeholder="Seleccionar"
          filter
        />
        <SelectComponent
          idInput="Program"
          control={control}
          errors={errors}
          //data={founds}
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
            className={`button-save ${
              !isValid || submitDisabled ? "disabled-black" : ""
            } big`}
            type="submit"
            disabled={!isValid || submitDisabled}
          />
        </div>
      </FormComponent>
    </>
  );
};

export default PQRSDF;
