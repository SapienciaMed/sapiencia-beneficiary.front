import React from "react";
import { InputComponent } from "../../../../../common/components/Form";

const DetailsAttentions = () => {
  return (
    <>
      <div className="grid-form-3-container gap-25 mt-24px ml-16px mr-16px p-0">
        <InputComponent
          idInput="typeOfRequest"
          label={"Tipo de solicitud"}
          disabled
          defaultValue={""}
          typeInput="text"
          className="input-basic medium"
          classNameLabel="text-black small"
        />
        <InputComponent
          idInput="typeOfRequest"
          label={"Tipo de solicitud"}
          disabled
          defaultValue={""}
          typeInput="text"
          className="input-basic medium"
          classNameLabel="text-black small"
        />
        <InputComponent
          idInput="typeOfRequest"
          label={"Tipo de solicitud"}
          disabled
          defaultValue={""}
          typeInput="text"
          className="input-basic medium"
          classNameLabel="text-black small"
        />
      </div>
      <div className="grid-form-3-container gap-25 mt-24px ml-16px mr-16px p-0"></div>
      <div className=" gap-25 mt-24px ml-16px mr-16px p-0"></div>
    </>
  );
};

export default React.memo(DetailsAttentions);
