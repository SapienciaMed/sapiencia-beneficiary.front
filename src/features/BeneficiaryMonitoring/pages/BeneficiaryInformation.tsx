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
  const { handleClose } = MainHook();
  const tabs = [
    { title: "Información general", content: <GeneralInformation /> },
    // { title: "Historial", content: <Historical /> },
    { title: "Beneficios", content: <Benefits /> },
    { title: "PQRSDF", content: <PQRSDF /> },
    { title: "Atenciones", content: <Attentions /> },
    // { title: "Consolidación", content: <Consolidation /> },
    // { title: "Estado Crédito", content: <Credit_Status /> },
  ];
  const panelClassName = (parent, index) => {
    if (parent.state.activeIndex === index) return "bg-primary";
  };
  return (
    <>
      <div className="mt-24px ml-24px">
        <div className="text-black large bold grid-span-4-columns  pb-14px">
          Información beneficiario
        </div>
        <div className="card">
          <div>
            <TabView>
              {tabs.map((tab, i) => {
                return (
                  <TabPanel
                    pt={{
                      headerAction: ({ parent }) => ({
                        className: panelClassName(parent, i),
                      }),
                    }}
                    key={i}
                    header={tab.title}
                  >
                    <p className="m-0">{tab.content}</p>
                  </TabPanel>
                );
              })}
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
        </div>
      </div>
    </>
  );
};

export default memo(BeneficiaryInformation);
