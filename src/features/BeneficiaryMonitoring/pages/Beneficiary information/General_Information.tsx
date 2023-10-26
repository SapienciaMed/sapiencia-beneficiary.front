import React, { memo } from "react";
import { Accordion, AccordionTab } from "primereact/accordion";
import { InputComponent } from "../../../../common/components/Form/input.component";
import { useGetGeneralInformation } from "../../hooks/BeneficiaryInformation/GeneralInformation.hook";
const GeneralInformation = () => {
  const {control,register} = useGetGeneralInformation()
  return (
    <div className=" container-sections-forms ml-20px mr-20px">
      <Accordion activeIndex={0}>
        <AccordionTab header="Datos personales">
          <div className="grid-form-4-container gap-25 mt-14px">
            <InputComponent
              idInput="Tipo_de_documento"
              label={<>Tipo de documento</>}
              register={register}
              typeInput="text"
              className="input-basic medium"
              classNameLabel="text-black big bold"
              disabled
            />
            <InputComponent
              idInput="Nro_de_identificacion"
              label={<>Documento de identidad</>}
              register={register}
              typeInput="text"
              className="input-basic medium"
              classNameLabel="text-black big bold"

              disabled
            />
            <InputComponent
              idInput="Nombre"
              label={<>Nombres y Apellidos</>}
              register={register}
              typeInput="text"
              className="input-basic medium"
              classNameLabel="text-black big bold"
              disabled
            />
            <InputComponent
              idInput="Lugar_expedicion"
              label={<>Lugar de expedición</>}
              register={register}
              typeInput="text"
              className="input-basic medium"
              classNameLabel="text-black big bold"
              disabled
            />
            <InputComponent
              idInput="Genero"
              label={<>Sexo</>}
              register={register}
              typeInput="text"
              className="input-basic medium"
              classNameLabel="text-black big bold"
              disabled
            />
            <InputComponent
              idInput="Fecha_nacimiento"
              label={<>Fecha</>}
              register={register}
              typeInput="text"
              className="input-basic medium"
              classNameLabel="text-black big bold"
              disabled
            />
            <InputComponent
              idInput="Edad"
              label={<>Edad</>}
              register={register}
              typeInput="text"
              className="input-basic medium"
              classNameLabel="text-black big bold"
              disabled
            />
            <InputComponent
              idInput="Pais_de_nacimiento"
              label={<>Pais</>}
              register={register}
              typeInput="text"
              className="input-basic medium"
              classNameLabel="text-black big bold"
              disabled
            />
            <InputComponent
              idInput="Dpto_de_nacimiento"
              label={<>Departamento de nacimiento</>}
              register={register}
              typeInput="text"
              className="input-basic medium"
              classNameLabel="text-black big bold"
              disabled
            />
            <InputComponent
              idInput="Municipio_de_nacimiento"
              label={<>Municipio de nacimiento</>}
              register={register}
              typeInput="text"
              className="input-basic medium"
              classNameLabel="text-black big bold"
              disabled
            />
            <InputComponent
              idInput="Direccion_residencia"
              label={<>Datos de residencia</>}
              register={register}
              typeInput="text"
              className="input-basic medium"
              classNameLabel="text-black big bold"
              disabled
            />
            <InputComponent
              idInput="Celular"
              label={<>Celular</>}
              register={register}
              typeInput="text"
              className="input-basic medium"
              classNameLabel="text-black big bold"
              disabled
            />
            <InputComponent
              idInput="Correo"
              label={<>Correo</>}
              register={register}
              typeInput="text"
              className="input-basic medium"
              classNameLabel="text-black big bold"
              disabled
            />
          </div>
        </AccordionTab>
        <AccordionTab header="IES y programa">
          <div className="grid-form-2-container gap-25 mt-14px">
            <InputComponent
              idInput="IES"
              label={<>Institución de educación superior (IES)</>}
              register={register}
              typeInput="text"
              className="input-basic medium"
              classNameLabel="text-black big bold"
              disabled
            />
            <InputComponent
              idInput="Programa_academico"
              label={<>Programa académico</>}
              register={register}
              typeInput="text"
              className="input-basic medium"
              classNameLabel="text-black big bold"
              disabled
            />
          </div>
        </AccordionTab>
        <AccordionTab header="Deudor Solidario">
          <div className="grid-form-3-container gap-25 mt-14px">

          <InputComponent
              idInput="Tipo_documento_deudor"
              label={<>Tipo documento del deudor</>}
              register={register}
              typeInput="text"
              className="input-basic medium"
              classNameLabel="text-black big bold"
              disabled
            />
          <InputComponent
              idInput="Nro_documento_deudor"
              label={<>Documento de identidad Deudor</>}
              register={register}
              typeInput="text"
              className="input-basic medium"
              classNameLabel="text-black big bold"
              disabled
            />
          <InputComponent
              idInput="Nombre_deudor"
              label={<>Nombres y Apellidos</>}
              register={register}
              typeInput="text"
              className="input-basic medium"
              classNameLabel="text-black big bold"
              disabled
            />
          <InputComponent
              idInput="Dpto_resd_deudor"
              label={<>Departamento residencia</>}
              register={register}
              typeInput="text"
              className="input-basic medium"
              classNameLabel="text-black big bold"
              disabled
            />
          <InputComponent
              idInput="Mpio_resd_deudor"
              label={<>Municipio residencia</>}
              register={register}
              typeInput="text"
              className="input-basic medium"
              classNameLabel="text-black big bold"
              disabled
            />
          <InputComponent
              idInput="Dir_resd_deudor"
              label={<>Dirección</>}
              register={register}
              typeInput="text"
              className="input-basic medium"
              classNameLabel="text-black big bold"
              disabled
            />
          <InputComponent
              idInput="Telefono_deudor"
              label={<>Teléfono fijo Deudor</>}
              register={register}
              typeInput="text"
              className="input-basic medium"
              classNameLabel="text-black big bold"
              disabled
            />
          <InputComponent
              idInput="Celular_deudor"
              label={<>Celular deudor</>}
              register={register}
              typeInput="text"
              className="input-basic medium"
              classNameLabel="text-black big bold"
              disabled
            />
          <InputComponent
              idInput="Correo_deudor"
              label={<>Correo electrónico</>}
              register={register}
              typeInput="text"
              className="input-basic medium"
              classNameLabel="text-black big bold"
              disabled
            />
          <InputComponent
              idInput="Actividad_economica_deudor"
              label={<>Actividad económica</>}
              register={register}
              typeInput="text"
              className="input-basic medium"
              classNameLabel="text-black big bold"
              disabled
            />
          <InputComponent
              idInput="Empresa_deudor"
              label={<>Empresa donde trabaja</>}
              register={register}
              typeInput="text"
              className="input-basic medium"
              classNameLabel="text-black big bold"
              disabled
            />
          <InputComponent
              idInput="Cargo_deudor"
              label={<>Cargo u ocupación</>}
              register={register}
              typeInput="text"
              className="input-basic medium"
              classNameLabel="text-black big bold"
              disabled
            />
          <InputComponent
              idInput="Dir_empresa_deudor"
              label={<>Dirección de la empresa</>}
              register={register}
              typeInput="text"
              className="input-basic medium"
              classNameLabel="text-black big bold"
              disabled
            />
          <InputComponent
              idInput="Tel_empresa_deudor"
              label={<>Teléfono de la empresa</>}
              register={register}
              typeInput="text"
              className="input-basic medium"
              classNameLabel="text-black big bold"
              disabled
            />
          <InputComponent
              idInput="Salario_deudor"
              label={<>Salario o ingresos actuales $</>}
              register={register}
              typeInput="text"
              className="input-basic medium"
              classNameLabel="text-black big bold"
              disabled
            />
            </div>
        </AccordionTab>
      </Accordion>
    </div>
  );
};

export default memo(GeneralInformation);
