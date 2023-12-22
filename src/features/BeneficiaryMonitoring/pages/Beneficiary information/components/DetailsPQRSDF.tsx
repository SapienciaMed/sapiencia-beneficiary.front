import React, { memo } from "react";
import { InputComponent } from "../../../../../common/components/Form";
import { Accordion, AccordionTab } from "primereact/accordion";
import { TextAreaComponent } from "../../../../../common/components/Form/input-text-area.component";

const DetailsPQRSDF = ({ data }) => {
  console.log({ data });

  return (
    <div className="container-sections-forms mt-24px ml-16px mr-14px p-0">
      <div className="text-black large bold grid-span-6-columns pb-14px mt-24px">
        <div className="grid-form-3-container gap-25 mt-24px ml-16px mr-16px p-0">
          <InputComponent
            idInput="typeOfRequest"
            label={"Tipo de solicitud"}
            disabled
            defaultValue={data?.typeOfRequest}
            typeInput="text"
            className="input-basic medium"
            classNameLabel="text-black small"
          />
          <InputComponent
            idInput="identityDocument"
            label={"Doc. Identidad"}
            disabled
            defaultValue={data?.identityDocument}
            typeInput="text"
            className="input-basic medium"
            classNameLabel="text-black small"
          />
          <InputComponent
            idInput="typeOfEntity"
            label={"Tipo de entidad"}
            disabled
            defaultValue={data?.typeOfEntity}
            typeInput="text"
            className="input-basic medium"
            classNameLabel="text-black small"
          />
        </div>
        <div className="mt-24px ml-16px mr-16px p-0">
          <Accordion activeIndex={0}>
            <AccordionTab
              header={
                <span style={{ color: "#6C757D" }}>
                  Información del ciudadano
                </span>
              }
            >
              <div className="grid-form-4-container gap-25 mb-16px ml-14px mr-14px p-0">
                <InputComponent
                  idInput="fullName"
                  label={"Nombres y Apellidos"}
                  disabled
                  defaultValue={data?.citizenInformation?.fullName}
                  typeInput="text"
                  className="input-basic medium"
                  classNameLabel="text-black small bold"
                />
                <InputComponent
                  idInput="dateOfBirth"
                  label={"Fecha de nacimiento"}
                  disabled
                  defaultValue={data?.citizenInformation?.dateOfBirth}
                  typeInput="text"
                  className="input-basic medium"
                  classNameLabel="text-black small bold"
                />
                <InputComponent
                  idInput="numberContactOne"
                  label={"Número de contacto 1"}
                  disabled
                  defaultValue={data?.citizenInformation?.numberContactOne}
                  typeInput="text"
                  className="input-basic medium"
                  classNameLabel="text-black small bold"
                />
                <InputComponent
                  idInput="numberContactTwo"
                  label={"Número de contacto 2"}
                  disabled
                  defaultValue={data?.citizenInformation?.numberContactTwo}
                  typeInput="text"
                  className="input-basic medium"
                  classNameLabel="text-black small bold"
                />
              </div>
              <div className="grid-form-2-container gap-25 mb-16px ml-14px mr-14px p-0">
                <InputComponent
                  idInput="email"
                  label={"Correo electrónico"}
                  disabled
                  defaultValue={data?.citizenInformation?.email}
                  typeInput="text"
                  className="input-basic medium"
                  classNameLabel="text-black small bold"
                />
                <InputComponent
                  idInput="address"
                  label={"Dirección"}
                  disabled
                  defaultValue={data?.citizenInformation?.address}
                  typeInput="text"
                  className="input-basic medium"
                  classNameLabel="text-black small bold"
                />
              </div>
              <div className="grid-form-4-container gap-25 mb-16px ml-14px mr-14px p-0">
                <InputComponent
                  idInput="country"
                  label={"País"}
                  disabled
                  defaultValue={data?.citizenInformation?.country}
                  typeInput="text"
                  className="input-basic medium"
                  classNameLabel="text-black small bold"
                />
                <InputComponent
                  idInput="department"
                  label={"Departamento"}
                  disabled
                  defaultValue={data?.citizenInformation?.department}
                  typeInput="text"
                  className="input-basic medium"
                  classNameLabel="text-black small bold"
                />
                <InputComponent
                  idInput="municipality"
                  label={"Municipio"}
                  disabled
                  defaultValue={data?.citizenInformation?.municipality}
                  typeInput="text"
                  className="input-basic medium"
                  classNameLabel="text-black small bold"
                />
              </div>
              <div className="grid-form-2-container gap-25 mb-16px ml-14px mr-14px p-0">
                <InputComponent
                  idInput="MeansByWhichYouWantToReceiveTheAnswer"
                  label={"Medio por el cual quiere recibir la respuesta "}
                  disabled
                  defaultValue={
                    data?.citizenInformation
                      ?.MeansByWhichYouWantToReceiveTheAnswer
                  }
                  typeInput="text"
                  className="input-basic medium"
                  classNameLabel="text-black small bold"
                />
              </div>
            </AccordionTab>
            <AccordionTab
              header={
                <span style={{ color: "#6C757D" }}>
                  Información de la solicitud
                </span>
              }
            >
              <div className="grid-form-2-container gap-25 mb-16px ml-14px mr-14px p-0">
                <InputComponent
                  idInput="programToWhichTheApplicationApplies"
                  label={"Programa al que aplica la solicitud"}
                  disabled
                  defaultValue={
                    data?.informationOnTheRequest
                      ?.programToWhichTheApplicationApplies
                  }
                  typeInput="text"
                  className="input-basic medium"
                  classNameLabel="text-black small bold"
                />
                <InputComponent
                  idInput="subjectOfTheApplication"
                  label={"Asunto de la solicitud"}
                  disabled
                  defaultValue={
                    data?.informationOnTheRequest?.subjectOfTheApplication
                  }
                  typeInput="text"
                  className="input-basic medium"
                  classNameLabel="text-black small bold"
                />
              </div>
              <div className="grid-form-2-container gap-25 mb-16px ml-14px mr-14px p-0">
                <InputComponent
                  idInput="classification"
                  label={"Clasificación"}
                  disabled
                  defaultValue={data?.informationOnTheRequest?.classification}
                  typeInput="text"
                  className="input-basic medium"
                  classNameLabel="text-black small bold"
                />
                <InputComponent
                  idInput="dependency"
                  label={"Dependencia"}
                  disabled
                  defaultValue={data?.informationOnTheRequest?.dependency}
                  typeInput="text"
                  className="input-basic medium"
                  classNameLabel="text-black small bold"
                />
              </div>
              <div className="gap-25 mb-16px ml-14px mr-14px p-0">
                <TextAreaComponent
                  idInput="description"
                  label={"Descripción"}
                  disabled
                  defaultValue={data?.informationOnTheRequest?.description}
                  className="input-basic large medium"
                  classNameLabel="text-black small bold"
                  rows={5}
                />
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: "5px",
                  }}
                >
                  <div className="text-black small">Max. 5000 caracteres</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    marginTop: "5px",
                  }}
                >
                  <div className="text-black medium bold">
                    Archivos o documentos que soportan la solicitud
                  </div>
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    marginTop: "5px",
                  }}
                  onClick={() => console.log("click buttonText")}
                >
                  <div className="small bold" style={{ color: "#FF0000", cursor: "pointer" }}>
                    Documento.PDF
                  </div>
                </div>
              </div>
            </AccordionTab>
            <AccordionTab
              header={
                <span style={{ color: "#6C757D" }}>
                  Documentos de apoyo interno
                </span>
              }
            >
              asdas
            </AccordionTab>
            <AccordionTab
              header={
                <span style={{ color: "#6C757D" }}>
                  Respuestas a la solicitud
                </span>
              }
            >
              asdas
            </AccordionTab>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default memo(DetailsPQRSDF);
