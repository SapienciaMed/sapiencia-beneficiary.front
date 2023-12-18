import { memo } from "react";
import { Route, Routes } from "react-router-dom";
import ConsultBeneficiaryMonitoring from "./pages/ConsultBeneficiaryMonitoring";
import BeneficiaryInformation from "./pages/BeneficiaryInformation";
import PrivateRoute from "../../common/utils/auth-private-guard";
import BeneficiaryEditPage from "./pages/beneficiary-edit.page";
const BeneficiaryMonitoringRoutes = () => {
  return (
    <Routes>
      <Route
        path="/editar/:document/:foundId"
        element={
          <PrivateRoute
            element={<BeneficiaryEditPage />}
            allowedAction={"CONSULTAR_BENEFICIARIO"}
          />
        }
      />
      <Route
        path=""
        element={
          <PrivateRoute
            element={<ConsultBeneficiaryMonitoring />}
            allowedAction={"CONSULTAR_BENEFICIARIO"}
          />
        }
      />
      <Route
        path="/info/:document/:foundId"
        element={
          <PrivateRoute
            element={<BeneficiaryInformation />}
            allowedAction={"CONSULTAR_BENEFICIARIO"}
          />
        }
      />
    </Routes>
  );
};

export default memo(BeneficiaryMonitoringRoutes);
