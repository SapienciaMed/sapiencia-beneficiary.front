import React, { memo, useEffect, useRef } from "react";
import { InputComponent } from "../../../../../common/components/Form";
import { Accordion, AccordionTab } from "primereact/accordion";
import { TextAreaComponent } from "../../../../../common/components/Form/input-text-area.component";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import Svgs from "../../../../../public/images/icons/svgs";
const DetailsPQRSDF = ({ data }) => {
  // console.log({ data });

  const viewFile = (file: any) => {
    // console.log({ file });

    let base64Pdf = file.filesOrDocumentsSupportingTheRequest
      ? file.filesOrDocumentsSupportingTheRequest.split(";base64,").pop()
      : file.file.split(";base64,").pop();

    const byteCharacters = atob(base64Pdf);
    const byteNumbers = new Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: "application/octet-stream" });

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = file.nameFile;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  if (!data || Object.keys(data).length === 0) return;

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
              <div className="grid-form-2-container gap-25 mb-16px ml-14px mr-14px p-0">
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
              <div className="grid-form-2-container gap-25 mb-16px ml-14px mr-14px p-0">
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
              </div>
              <div className="grid-form-2-container gap-25 mb-16px ml-14px mr-14px p-0">
                <InputComponent
                  idInput="municipality"
                  label={"Municipio"}
                  disabled
                  defaultValue={data?.citizenInformation?.municipality}
                  typeInput="text"
                  className="input-basic medium"
                  classNameLabel="text-black small bold"
                />
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
                  onClick={() => viewFile(data.informationOnTheRequest)}
                >
                  <div
                    className="small bold"
                    style={{ color: "#FF0000", cursor: "pointer" }}
                  >
                    {data.informationOnTheRequest.nameFile}
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
              <div className="spc-common-table">
                <DataTable
                  value={data?.internalSupportDocuments}
                  showGridlines
                  tableStyle={{
                    fontSize: "14px",
                    width: "full",
                    fontWeight: "500",
                    marginTop: "24px",
                    marginLeft: "16px",
                    marginRight: "16px",
                    marginBottom: "24px",
                  }}
                  emptyMessage={"No se generó resultado en la búsqueda"}
                  paginator
                  rows={5}
                  // rowsPerPageOptions={[5, 10, 25, 50]}
                >
                  <Column
                    field="user"
                    header="Usuario"
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  ></Column>
                  <Column
                    field="visibleToPetitioner"
                    header="Visible para peticionario"
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  />
                  <Column
                    field="file"
                    header="Acciones"
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                    body={(row) => (
                      <div onClick={() => viewFile(row)} className="pointer">
                        <Svgs svg="view" />
                      </div>
                    )}
                  />
                </DataTable>
              </div>
            </AccordionTab>
            <AccordionTab
              header={
                <span style={{ color: "#6C757D" }}>
                  {`Respuesta PQRSDF ${data.filingNumber}`}
                </span>
              }
            >
              <div className="spc-common-table" style={{ maxWidth: "40rem" }}>
                <DataTable
                  value={data?.responsesPQRSDF}
                  showGridlines
                  tableStyle={{
                    fontSize: "14px",
                    width: "full",
                    fontWeight: "500",
                    marginTop: "24px",
                    marginLeft: "16px",
                    marginRight: "16px",
                    marginBottom: "24px",
                  }}
                  emptyMessage={"No se generó resultado en la búsqueda"}
                  paginator
                  rows={5}
                  // rowsPerPageOptions={[5, 10, 25, 50]}
                >
                  <Column
                    field="date"
                    header="Fecha"
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  />
                  <Column
                    field="dependecyResponse"
                    header="Dependencia que responde"
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  />
                  <Column
                    field="userResponse"
                    header="Usuario que responde"
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  />
                  <Column
                    field="assignedDependecy"
                    header="Dependencia asignada"
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  />
                  <Column
                    field="assignedUser"
                    header="Usuario asignado"
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  />
                  <Column
                    field="typeResponse"
                    header="Tipo de respuesta"
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  />
                  <Column
                    field="response"
                    header="Respuesta"
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  />
                  <Column
                    field="factor"
                    header="Factor"
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  />
                  <Column
                    field="status"
                    header="Estado"
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  />
                  <Column
                    field="daysOnPlatter"
                    header="Días en bandeja"
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                  />
                  <Column
                    field="file"
                    header="Acciones"
                    style={{
                      fontSize: "14px",
                      fontWeight: "400",
                    }}
                    body={(row) => (
                      <div onClick={() => viewFile(row)} className="pointer">
                        <Svgs svg="view" />
                      </div>
                    )}
                  />
                </DataTable>
              </div>
            </AccordionTab>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default memo(DetailsPQRSDF);
