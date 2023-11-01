import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IBenefitsTable } from "../../../../common/interfaces/BeneficiaryInformation/Benefits.interface";
import { urlApiBeneficiary } from "../../../../common/utils/base-url";
import useCrudService from "../../../../common/hooks/crud-service.hook";
import { ApiResponse } from "../../../../common/utils/api-response";

export const getDataBenefits = () => {
    const [Information, setInformation] = useState<IBenefitsTable>(null);
    const { document, foundId } = useParams();
    const data = { page: 1, perPage: 100, document, foundId }
    const { post } = useCrudService(urlApiBeneficiary)

    const getInformation = async () => {
        try {
            const endpoint = "/api/v1/sapiencia/beneficiary/getBenefits"
            const resp: ApiResponse<IBenefitsTable> = await post(endpoint, data)
            setInformation(resp.data)
            console.log(resp.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getInformation()
    }, [])

    return {
        setInformation
    }
}