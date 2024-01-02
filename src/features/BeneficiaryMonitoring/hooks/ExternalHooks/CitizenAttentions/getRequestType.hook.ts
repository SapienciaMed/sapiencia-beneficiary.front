import { useEffect, useState } from "react";
import useCrudService from "../../../../../common/hooks/crud-service.hook";
import { urlApiCitizenAttentions } from "../../../../../common/utils/base-url";
import { ApiResponse } from "../../../../../common/utils/api-response";
import { useParams } from "react-router-dom";

export const getRequestType = () => {
    const { get } = useCrudService(urlApiCitizenAttentions)
    const [requestTypes, setRequestTypes] = useState<any>([])

    const getAllRequestType = async () => {
        const endpoint = "/api/v1/citizen-attention/get-request-subject-types"
        const resp: ApiResponse<[]> = await get(endpoint)

        const dataRes = resp.data.map((requestTypes) => {
            const { aso_codigo, aso_asunto } = requestTypes

            return {
                value: aso_codigo,
                name: aso_asunto
            }


        })
        setRequestTypes(dataRes)
    }

    useEffect(() => {
        getAllRequestType()
    }, [])

    return { requestTypes }
}