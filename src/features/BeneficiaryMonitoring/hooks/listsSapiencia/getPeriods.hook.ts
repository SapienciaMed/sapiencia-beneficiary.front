import { useEffect, useState } from "react";
import useCrudService from "../../../../common/hooks/crud-service.hook";
import { ApiResponse } from "../../../../common/utils/api-response";
import { urlApiBeneficiary } from "../../../../common/utils/base-url";
import { IPeriods } from "../../../../common/interfaces/listsSapiencia/period.interfaces";


export const useGetAllPeriod = () =>{
    const { get } = useCrudService(urlApiBeneficiary);
    const [periods, setAllPeridos] = useState<any>([]);
  
    const getAllFounds = async () => {
      try {
        const endpoint = "/api/v1/sapiencia/call-data/get-all-periods";
        const resp: ApiResponse<IPeriods[]> = await get(endpoint);
        setAllPeridos(resp.data);
      } catch (err) {
        console.error(err);
        console.log("Error response:", err.response);
      }
    };
  
    useEffect(()=>{
      getAllFounds();
    },[])
  
    return {periods}
}