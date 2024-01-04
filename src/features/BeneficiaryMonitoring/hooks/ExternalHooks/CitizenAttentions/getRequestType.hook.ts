import { useEffect, useState } from "react";
import useCrudService from "../../../../../common/hooks/crud-service.hook";
import { urlApiCitizenAttentions } from "../../../../../common/utils/base-url";
import { ApiResponse } from "../../../../../common/utils/api-response";
import { useParams } from "react-router-dom";

export const getRequestType = () => {
    const { post } = useCrudService(urlApiCitizenAttentions)
    const [requestTypes, setRequestTypes] = useState<any>([])

    const getAllRequestType = async () => {
        const endpoint = "/api/v1/citizen-attention/get-request-types-by-user"
        const resp: ApiResponse<[]> = await post(endpoint)

        setRequestTypes(resp.data)
    }

    useEffect(() => {
        getAllRequestType()
    }, [])

    return { requestTypes }
}