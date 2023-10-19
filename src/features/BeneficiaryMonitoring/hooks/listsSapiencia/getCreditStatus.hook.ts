import { useEffect, useState } from "react";
import useCrudService from "../../../../common/hooks/crud-service.hook";
import { ApiResponse } from "../../../../common/utils/api-response";
import { urlApiBeneficiary } from "../../../../common/utils/base-url";
import { ICreditStatus } from "../../../../common/interfaces/listsSapiencia/creditStatus.interfaces";

export const useGetAllCreditStatus = () => {
  const { get } = useCrudService(urlApiBeneficiary);
  const [creditsStatus, setAllCreditStatus] = useState<any>([]);

  const getAllFounds = async () => {
    try {
      const endpoint = "/api/v1/sapiencia/call-data/get-all-creditStatus";
      const resp: ApiResponse<ICreditStatus[]> = await get(endpoint);
      setAllCreditStatus(resp.data);
    } catch (err) {
      console.error(err);
      console.log("Error response:", err.response);
    }
  };

  useEffect(() => {
    getAllFounds();
  }, []);

  return { creditsStatus };
};
