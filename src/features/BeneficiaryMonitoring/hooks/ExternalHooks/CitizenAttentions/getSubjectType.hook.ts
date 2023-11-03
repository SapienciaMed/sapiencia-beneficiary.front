import { useEffect, useState } from "react";
import useCrudService from "../../../../../common/hooks/crud-service.hook";
import { urlApiCitizenAttentions } from "../../../../../common/utils/base-url";
import { ApiResponse } from "../../../../../common/utils/api-response";

export const getSubjectTypeCitizenAttentions = () => {
    const { get } = useCrudService(urlApiCitizenAttentions);
    const [subjectType, setSubjectType] = useState<any>([]);

    const getAllSubjectType = async () => {
        try {
            const endpoint = "/get-type-solicituds"
            const resp: ApiResponse<[]> = await get(endpoint)

            const dataRes = resp.data.map((program) => {
                const { TSO_CODIGO, TSO_DESCRIPTION } = program
                return {
                    value: TSO_CODIGO,
                    name: TSO_DESCRIPTION,
                }
            })
            setSubjectType(dataRes);
        } catch (err) {
            console.error(err);
            console.log("Error response:", err.response);
        }
    }
    useEffect(() => {
        getAllSubjectType()
    }, [])

    return { subjectType }
}