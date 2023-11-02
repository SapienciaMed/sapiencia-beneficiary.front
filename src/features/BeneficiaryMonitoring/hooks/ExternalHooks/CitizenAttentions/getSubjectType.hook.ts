import { useEffect, useState } from "react";
import useCrudService from "../../../../../common/hooks/crud-service.hook";
import { urlApiCitizenAttentions } from "../../../../../common/utils/base-url";
import { ApiResponse } from "../../../../../common/utils/api-response";

export interface ISubjectType {
    value: number;
    name: string;
}
export const getSubjectTypeCitizenAttentions = () => {
    const { get } = useCrudService(urlApiCitizenAttentions);
    const [subjectType, setSubjectType] = useState<any>([]);

    const getAllSubjectType = async () => {
        try {
            const endpoint = "/get-type-solicituds"
            const resp: ApiResponse<ISubjectType[]> = await get(endpoint)
            setSubjectType(resp.data);
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