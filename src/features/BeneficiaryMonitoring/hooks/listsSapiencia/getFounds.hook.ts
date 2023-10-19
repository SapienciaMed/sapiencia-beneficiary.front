import { useEffect, useState } from "react";
import useCrudService from "../../../../common/hooks/crud-service.hook";
import { ApiResponse } from "../../../../common/utils/api-response";
import {
  urlApiBeneficiary,
} from "../../../../common/utils/base-url";
import { IFounds } from "../../../../common/interfaces/listsSapiencia/founds.interfaces";

export const useGetAllFounds = () => {
  const { get } = useCrudService(urlApiBeneficiary);
  const [founds, setAllFounds] = useState<any>([]);

  const getAllFounds = async () => {
    try {
      const endpoint = "/api/v1/sapiencia/call-data/get-all-founds";
      const resp: ApiResponse<IFounds[]> = await get(endpoint);
      setAllFounds(resp.data);
    } catch (err) {
      console.error(err);
      console.log("Error response:", err.response);
    }
  };

  useEffect(()=>{
    getAllFounds();
  },[])

  return {founds}
};
