import { useContext, useDebugValue, useEffect, useState } from "react";
import { ApiResponse } from "../../../../common/utils/api-response";
import { formaterNumberToCurrency } from "../../../../common/utils/helpers";
import useCrudService from "../../../../common/hooks/crud-service.hook";
import { urlApiBeneficiary } from "../../../../common/utils/base-url";
import { AppContext } from "../../../../common/contexts/app.context";
import SocialServicesModal from "../../forms/BeneficiaryInformation/Benefits/SocialServices/SocialServicesModal";
import { useParams } from "react-router-dom";

export const getDataComponentsBeneftis = (foundId) => {
  const [totalBenefits, setTotalBenefits] = useState(null);
  const { post } = useCrudService(urlApiBeneficiary);
  const [InformationBenefits, setInformationBenefits] = useState(null);
  const { setMessage } = useContext(AppContext);
  const [view, setView] = useState<boolean>(false);
  const { document } = useParams();
  const getInformationBenefits = async (data) => {
    try {
      const { founds } = data;
      const foundId = founds;
      const dataBenefits = {
        page: 1,
        perPage: 1000,
        document,
        foundId,
      };
      const endpoint = "/api/v1/sapiencia/beneficiary/getBenefits";
      const resp: ApiResponse<[]> = await post(endpoint, dataBenefits);

      const dataRes = resp.data["array"];
      dataRes.forEach((element) => {
        element.OrderEnrollment = formaterNumberToCurrency(
          element.OrderEnrollment
        );
        element.OrderSustenance = formaterNumberToCurrency(
          element.OrderSustenance
        );
        element.OrderTotal = formaterNumberToCurrency(element.OrderTotal);
        element.ProjectionEnrollment = formaterNumberToCurrency(
          element.ProjectionEnrollment
        );
        element.ProjectionSustenance = formaterNumberToCurrency(
          element.ProjectionSustenance
        );
        element.TotalProjection = formaterNumberToCurrency(
          element.TotalProjection
        );
      });
      setInformationBenefits(dataRes);
      if (resp.data["array"].length > 0) {
        setView(true);
      }
      setTotalBenefits(resp.data["array"].length);
    } catch (error) {
      console.error(error);
    }
  };

  const showSocialServices = (
    periodId,
    period_name,
    statusCredit,
    nroOrder
  ) => {
    setMessage({
      title: "Servicio Social",
      show: true,

      description: (
        <SocialServicesModal
          document={document}
          period={periodId}
          found={foundId}
          period_name={period_name}
          statusCredit={statusCredit}
          nroOrder={nroOrder}
        />
      ),
      background: true,
      okTitle: "Cerrar",
      onOk: () => {
        setMessage({ show: false });
      },
      onClose: () => {
        setMessage({ show: false });
      },
      style: "align-items: flex-start",
    });
  };

  useEffect(() => {
    let data = {
      founds: foundId,
    };
    getInformationBenefits(data);
  }, []);
  return {
    InformationBenefits,
    totalBenefits,
    showSocialServices,
    view,
  };
};
