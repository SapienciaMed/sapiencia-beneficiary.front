import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import ConsultBeneficiaryMonitoring from "./pages/ConsultBeneficiaryMonitoring";
import BeneficiaryInformation from "./pages/BeneficiaryInformation";

const BeneficiaryMonitoringRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<ConsultBeneficiaryMonitoring />} />
      <Route path="/info/:id" element={<BeneficiaryInformation />} />
    </Routes>
  );
};

export default memo(BeneficiaryMonitoringRoutes);
