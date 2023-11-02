import { useEffect, useState } from "react";
import useCrudService from "../../../../../common/hooks/crud-service.hook";
import { urlApiCitizenAttentions } from "../../../../../common/utils/base-url";
import { ApiResponse } from "../../../../../common/utils/api-response";

export interface IPrograms {
    value: number;
    name: string;
}
export const getProgramsCitizenAttentions = () => {
    const { get } = useCrudService(urlApiCitizenAttentions);
    const [programs, setProgrmas] = useState<any>([]);

    const getAllPrograms = async () => {
        const endpoint = "/get-Programs"
        const resp: ApiResponse<[]> = await get(endpoint)

        const dataRes = resp.data
        setProgrmas(resp.data);
    }

    useEffect(() => {
        getAllPrograms()
    }, [])

    return { programs }
}