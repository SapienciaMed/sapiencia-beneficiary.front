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
import { ITabsMenuTemplate } from "../../../common/interfaces/tabs-menu.interface";
import { useParams } from "react-router-dom";
import TabListComponent from "../../../common/components/tab-list.component";
import Documents from "./Beneficiary information/Documents";
const BeneficiaryInformation = () => {
  const { handleClose } = MainHook();
  const { option } = useParams();

  const tabs = (): ITabsMenuTemplate[] => {
    const InformacionGeneral = {
      id: "InformacionGeneral",
      title: "Información general",
      content: <GeneralInformation />,
      action: () => {},
      hide: true,
    };

    const Historial = {
      id: "Historial",
      title: "Historial",
      content: <Historical />,
      action: () => {},
      hide: true,
    };

    const Documentos = {
      id: "Documents",
      title: "Documentos",
      content: <Documents />,
      action: () => {},
      hide: true,
    };

    const Beneficios = {
      id: "Beneficios",
      title: "Beneficios",
      content: <Benefits />,
      action: () => {},
      hide: true,
    };

    const Pqrsdf = {
      id: "PQRSDF",
      title: "PQRSDF",
      content: <PQRSDF />,
      action: () => {},
      hide: true,
    };

    const Atenciones = {
      id: "Atenciones",
      title: "Atenciones",
      content: <Attentions />,
      action: () => {},
      hide: true,
    };

    const Consolidación = {
      id: "Consolidación",
      title: "Consolidación",
      content: <Consolidation />,
      action: () => {},
      hide: true,
    };

    const EstadoCredito = {
      id: "Estado Crédito",
      title: "Estado Crédito",
      content: <Credit_Status />,
      action: () => {},
      hide: true,
    };
    const result = [
      InformacionGeneral,
      // Historial,
      // Documentos,
      Beneficios,
      Pqrsdf,
      // Atenciones,
      // Consolidación,
      // EstadoCredito,
    ].filter((item) => item?.hide);
    return result;
  };

  const start = tabs().find(
    (tab) => tab.id.toString().toLowerCase() == option?.toLowerCase()
  );
  return (
    <>
      <div
        style={{ fontWeight: 500, fontSize: "29px" }}
        className="text-black large bold grid-span-4-columns mt-24px pb-14px"
      >
        Información beneficiario
      </div>
      <div>
        <section>
          <TabListComponent tabs={tabs()} start={start} />
        </section>
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
