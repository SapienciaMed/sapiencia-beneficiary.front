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

        const dataRes = resp.data.map((program) => {
            const { PRG_CODIGO, PRG_DESCRIPCION } = program
            return {
                value: PRG_CODIGO,
                name: PRG_DESCRIPCION,
            }
        })


        setProgrmas(dataRes);
    }

    useEffect(() => {
        getAllPrograms()
    }, [])

    return { programs }
}