import { memo } from "react";
import GeneralInformation from "./Beneficiary information/General_Information";
import { TabView, TabPanel } from "primereact/tabview";
import Historical from "./Beneficiary information/Historical";
import Benefits from "./Beneficiary information/Benefits";
import PQRSDF from "./Beneficiary information/PQRSDF";
import Attentions from "./Beneficiary information/Attentions";
import Consolidation from "./Beneficiary information/Consolidation";
import Credit_Status from "./Beneficiary information/Credit_Status";
import { ButtonComponent } from "../../../common/components/Form";
import { MainHook } from "../hooks/BeneficiaryInformation/Main";
const BeneficiaryInformation = () => {
  const {handleClose} = MainHook()
  return (
    <>
    <div className="p-tabview">
      <div className="text-black large bold grid-span-4-columns mt-14px ml-16px pb-14px">
        Información beneficiario
      </div>
        <TabView scrollable>
          <TabPanel header="Información general">
            <GeneralInformation />
          </TabPanel>
          <TabPanel header="Historial">
            <Historical />
          </TabPanel>
          <TabPanel header="Beneficios">
            <Benefits />
          </TabPanel>
          <TabPanel header="PQRSDF">
            <PQRSDF />
          </TabPanel>
          <TabPanel header="Atenciones">
            <Attentions />
          </TabPanel>
          <TabPanel header="Consolidación">
            <Consolidation />
          </TabPanel>
          <TabPanel header="Estado Crédito">
            <Credit_Status />
          </TabPanel>
        </TabView>
      <div className="button-save-container-display mr-24px">
        <ButtonComponent
          value="Regresar"
          className={`button-save big`}
          type="submit"
          action={handleClose}
        />
      </div>
      </div>
    </>
  );
};

export default memo(BeneficiaryInformation);
