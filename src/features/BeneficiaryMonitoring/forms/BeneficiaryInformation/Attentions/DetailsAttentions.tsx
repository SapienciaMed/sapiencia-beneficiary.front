import React from "react";
import { InputComponent } from "../../../../../common/components/Form";
import { TextAreaComponent } from "../../../../../common/components/Form/input-text-area.component";
import { DateTime } from "luxon";

const DetailsAttentions = ({ data }) => {
  console.log(data);

  const createAt = DateTime.fromISO(data.createdAt)
    .setLocale("fr")
    .toLocaleString(DateTime.DATE_SHORT);
  return (
    <>
      <div className=" container-sections-forms">
        <div className="grid-form-3-container  mt-24px  p-0">
          <InputComponent
            idInput="typeOfRequest"
            label={"Canal de atencion"}
            disabled
            defaultValue={
              data.serviceChannel.cna_canal ? data.serviceChannel.cna_canal : ""
            }
            typeInput="text"
            className="input-basic big"
            classNameLabel="text-black small bold"
          />
          <InputComponent
            idInput="typeOfRequest"
            label={"Fecha registro"}
            disabled
            defaultValue={createAt ? createAt : ""}
            typeInput="text"
            className="input-basic big"
            classNameLabel="text-black small bold"
          />
          <InputComponent
            idInput="typeOfRequest"
            label={"Tipo de usuario"}
            disabled
            defaultValue={data.userType.name ? data.userType.name : ""}
            typeInput="text"
            className="input-basic big"
            classNameLabel="text-black small bold"
          />
        </div>
        <div className="grid-form-3-container gap-25 mt-24px  p-0">
          <InputComponent
            idInput="typeOfRequest"
            label={"Tipo de solicitud"}
            disabled
            defaultValue={
              data.requestSubjectType.aso_asunto
                ? data.requestSubjectType.aso_asunto
                : ""
            }
            typeInput="text"
            className="input-basic big"
            classNameLabel="text-black small bold"
          />
          <InputComponent
            idInput="typeOfRequest"
            label={"Programa"}
            disabled
            defaultValue={
              data.program.prg_descripcion ? data.program.prg_descripcion : ""
            }
            typeInput="text"
            className="input-basic big"
            classNameLabel="text-black small bold"
          />
          <InputComponent
            idInput="typeOfRequest"
            label={"Tema de solicitud"}
            disabled
            defaultValue={
              data.attentionRequestType.description
                ? data.attentionRequestType.description
                : ""
            }
            typeInput="text"
            className="input-basic big"
            classNameLabel="text-black small bold"
          />
        </div>
        <div className="grid-form-3-container gap-25 mt-24px  p-0">
          <InputComponent
            idInput="typeOfRequest"
            label={"Tema de valor"}
            disabled
            defaultValue={""}
            typeInput="text"
            className="input-basic big"
            classNameLabel="text-black small bold"
          />
        </div>
        <div className="mt-20px grid-span-4-columns">
          <TextAreaComponent
            idInput="observation"
            className="text-area-basic"
            defaultValue={data.observation ? data.observation : ""}
            classNameLabel="text-black big bold"
            label={<>Observaciones</>}
            disabled
          />
        </div>
        <div
          style={{
            marginTop: "8px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          Máx 5000 caracteres.
        </div>
      </div>
    </>
  );
};

export default React.memo(DetailsAttentions);
