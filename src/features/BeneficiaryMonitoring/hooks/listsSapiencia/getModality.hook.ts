import { useEffect, useState } from "react";
import useCrudService from "../../../../common/hooks/crud-service.hook";
import { ApiResponse } from "../../../../common/utils/api-response";
import { urlApiBeneficiary } from "../../../../common/utils/base-url";
import { IModality } from "../../../../common/interfaces/listsSapiencia/modality.interfaces";

export const getAllModalitys = () =>{
    const { get } = useCrudService(urlApiBeneficiary);
    const [modalitys, setAllModalitys] = useState<any>([]);
  
    const getAllFounds = async () => {
      try {
        const endpoint = "/api/v1/sapiencia/call-data/get-all-modalitys";
        const resp: ApiResponse<IModality[]> = await get(endpoint);
        setAllModalitys(resp.data);
      } catch (err) {
        console.error(err);
        console.log("Error response:", err.response);
      }
    };
  
    useEffect(() => {
      getAllFounds();
    }, []);
  
    return { modalitys };
}