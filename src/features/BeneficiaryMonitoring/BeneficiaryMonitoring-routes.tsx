import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import ConsultBeneficiaryMonitoring from "./pages/ConsultBeneficiaryMonitoring";

const BeneficiaryMonitoringRoutes = () => {
  return (
    <Routes>
      <Route path = ""
      element ={<ConsultBeneficiaryMonitoring/>}/>
    </Routes>
  );
};


export default memo(BeneficiaryMonitoringRoutes)