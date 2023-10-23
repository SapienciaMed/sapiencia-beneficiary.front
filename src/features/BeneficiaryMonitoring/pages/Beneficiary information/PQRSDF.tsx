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
    tableActions
  } = PQRSDFHook();
  return (
    <>
      <div className="text-black large bold grid-span-4-columns pb-14px">
        PQRSDF presentadas por el Beneficiario
      </div>
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
    </>
  );
};

export default PQRSDF;
