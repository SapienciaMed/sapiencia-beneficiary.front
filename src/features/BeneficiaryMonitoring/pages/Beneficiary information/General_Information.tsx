import React, { memo } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { InputComponent } from "../../../../common/components/Form/input.component";
const GeneralInformation = () => {
  return (
    <div className=" container-sections-forms ml-20px mr-20px">
      <Accordion activeIndex={0}>
        <AccordionTab header="Datos personales">
          <div className="grid-form-4-container gap-25 mt-14px">
            <InputComponent
              idInput="ccBeneficiary"
              label={<>Tipo de documento</>}
              //register={[""]}
              typeInput="number"
              //errors={errors}
              className="input-basic medium"
              classNameLabel="text-black big bold"
              //onChange={handleChange}
              disabled
            />
            <InputComponent
              idInput="ccBeneficiary"
              label={<>Documento de identidad</>}
              //register={register}
              typeInput="number"
              //errors={errors}
              className="input-basic medium"
              classNameLabel="text-black big bold"
              //onChange={handleChange}
              disabled
            />
            <InputComponent
              idInput="ccBeneficiary"
              label={<>Nombres y Apellidos</>}
              //register={register}
              typeInput="number"
              //errors={errors}
              className="input-basic medium"
              classNameLabel="text-black big bold"
              //onChange={handleChange}
              disabled
            />
            <InputComponent
              idInput="ccBeneficiary"
              label={<>Lugar de expedicion</>}
              //register={register}
              typeInput="number"
              //errors={errors}
              className="input-basic medium"
              classNameLabel="text-black big bold"
              //onChange={handleChange}
              disabled
            />
            <InputComponent
              idInput="ccBeneficiary"
              label={<>Sexo</>}
              //register={register}
              typeInput="number"
              //errors={errors}
              className="input-basic medium"
              classNameLabel="text-black big bold"
              //onChange={handleChange}
              disabled
            />
            <InputComponent
              idInput="ccBeneficiary"
              label={<>Fecha</>}
              //register={register}
              typeInput="number"
              //errors={errors}
              className="input-basic medium"
              classNameLabel="text-black big bold"
              //onChange={handleChange}
              disabled
            />
            <InputComponent
              idInput="ccBeneficiary"
              label={<>Edad</>}
              //register={register}
              typeInput="number"
              //errors={errors}
              className="input-basic medium"
              classNameLabel="text-black big bold"
              //onChange={handleChange}
              disabled
            />
            <InputComponent
              idInput="ccBeneficiary"
              label={<>Pais</>}
              //register={register}
              typeInput="number"
              //errors={errors}
              className="input-basic medium"
              classNameLabel="text-black big bold"
              //onChange={handleChange}
              disabled
            />
            <InputComponent
              idInput="ccBeneficiary"
              label={<>Departamento de nacimiento</>}
              //register={register}
              typeInput="number"
              //errors={errors}
              className="input-basic medium"
              classNameLabel="text-black big bold"
              //onChange={handleChange}
              disabled
            />
            <InputComponent
              idInput="ccBeneficiary"
              label={<>Municipio de nacimiento</>}
              //register={register}
              typeInput="number"
              //errors={errors}
              className="input-basic medium"
              classNameLabel="text-black big bold"
              //onChange={handleChange}
              disabled
            />
            <InputComponent
              idInput="ccBeneficiary"
              label={<>Datos de residencia</>}
              //register={register}
              typeInput="number"
              //errors={errors}
              className="input-basic medium"
              classNameLabel="text-black big bold"
              //onChange={handleChange}
              disabled
            />
            <InputComponent
              idInput="ccBeneficiary"
              label={<>Celular</>}
              //register={register}
              typeInput="number"
              //errors={errors}
              className="input-basic medium"
              classNameLabel="text-black big bold"
              //onChange={handleChange}
              disabled
            />
            <InputComponent
              idInput="ccBeneficiary"
              label={<>Correo</>}
              //register={register}
              typeInput="number"
              //errors={errors}
              className="input-basic medium"
              classNameLabel="text-black big bold"
              //onChange={handleChange}
              disabled
            />
          </div>
        </AccordionTab>
        <AccordionTab header="IES y programa">
          <div className="grid-form-2-container gap-25 mt-14px">
            <InputComponent
              idInput="ccBeneficiary"
              label={<>Institución de educación superior (IES)</>}
              //register={register}
              typeInput="number"
              //errors={errors}
              className="input-basic medium"
              classNameLabel="text-black big bold"
              //onChange={handleChange}
              disabled
            />
            <InputComponent
              idInput="ccBeneficiary"
              label={<>Programa académico</>}
              //register={register}
              typeInput="number"
              //errors={errors}
              className="input-basic medium"
              classNameLabel="text-black big bold"
              //onChange={handleChange}
              disabled
            />
          </div>
        </AccordionTab>
        <AccordionTab header="Deudor Solidario">
          <div className="grid-form-3-container gap-25 mt-14px">

          <InputComponent
              idInput="ccBeneficiary"
              label={<>Tipo documento del deudor</>}
              //register={register}
              typeInput="number"
              //errors={errors}
              className="input-basic medium"
              classNameLabel="text-black big bold"
              //onChange={handleChange}
              disabled
            />
          <InputComponent
              idInput="ccBeneficiary"
              label={<>Documento de identicad Deudor</>}
              //register={register}
              typeInput="number"
              //errors={errors}
              className="input-basic medium"
              classNameLabel="text-black big bold"
              //onChange={handleChange}
              disabled
            />
          <InputComponent
              idInput="ccBeneficiary"
              label={<>Nombres y Apellidos</>}
              //register={register}
              typeInput="number"
              //errors={errors}
              className="input-basic medium"
              classNameLabel="text-black big bold"
              //onChange={handleChange}
              disabled
            />
          <InputComponent
              idInput="ccBeneficiary"
              label={<>Departamento residencia</>}
              //register={register}
              typeInput="number"
              //errors={errors}
              className="input-basic medium"
              classNameLabel="text-black big bold"
              //onChange={handleChange}
              disabled
            />
          <InputComponent
              idInput="ccBeneficiary"
              label={<>Municipio residencia</>}
              //register={register}
              typeInput="number"
              //errors={errors}
              className="input-basic medium"
              classNameLabel="text-black big bold"
              //onChange={handleChange}
              disabled
            />
          <InputComponent
              idInput="ccBeneficiary"
              label={<>Dirección</>}
              //register={register}
              typeInput="number"
              //errors={errors}
              className="input-basic medium"
              classNameLabel="text-black big bold"
              //onChange={handleChange}
              disabled
            />
          <InputComponent
              idInput="ccBeneficiary"
              label={<>Telefono fijo Deudor</>}
              //register={register}
              typeInput="number"
              //errors={errors}
              className="input-basic medium"
              classNameLabel="text-black big bold"
              //onChange={handleChange}
              disabled
            />
          <InputComponent
              idInput="ccBeneficiary"
              label={<>Celular deudor</>}
              //register={register}
              typeInput="number"
              //errors={errors}
              className="input-basic medium"
              classNameLabel="text-black big bold"
              //onChange={handleChange}
              disabled
            />
          <InputComponent
              idInput="ccBeneficiary"
              label={<>Correo electrónico</>}
              //register={register}
              typeInput="number"
              //errors={errors}
              className="input-basic medium"
              classNameLabel="text-black big bold"
              //onChange={handleChange}
              disabled
            />
          <InputComponent
              idInput="ccBeneficiary"
              label={<>Actividad económica</>}
              //register={register}
              typeInput="number"
              //errors={errors}
              className="input-basic medium"
              classNameLabel="text-black big bold"
              //onChange={handleChange}
              disabled
            />
          <InputComponent
              idInput="ccBeneficiary"
              label={<>Empresa donde trabaja</>}
              //register={register}
              typeInput="number"
              //errors={errors}
              className="input-basic medium"
              classNameLabel="text-black big bold"
              //onChange={handleChange}
              disabled
            />
          <InputComponent
              idInput="ccBeneficiary"
              label={<>Cargo u ocupación</>}
              //register={register}
              typeInput="number"
              //errors={errors}
              className="input-basic medium"
              classNameLabel="text-black big bold"
              //onChange={handleChange}
              disabled
            />
          <InputComponent
              idInput="ccBeneficiary"
              label={<>Dirección de la empresa</>}
              //register={register}
              typeInput="number"
              //errors={errors}
              className="input-basic medium"
              classNameLabel="text-black big bold"
              //onChange={handleChange}
              disabled
            />
          <InputComponent
              idInput="ccBeneficiary"
              label={<>Télefono de la empresa</>}
              //register={register}
              typeInput="number"
              //errors={errors}
              className="input-basic medium"
              classNameLabel="text-black big bold"
              //onChange={handleChange}
              disabled
            />
          <InputComponent
              idInput="ccBeneficiary"
              label={<>Salario o ingresos actuales $</>}
              //register={register}
              typeInput="number"
              //errors={errors}
              className="input-basic medium"
              classNameLabel="text-black big bold"
              //onChange={handleChange}
              disabled
            />
            </div>
        </AccordionTab>
      </Accordion>
    </div>
  );
};

export default memo(GeneralInformation);
