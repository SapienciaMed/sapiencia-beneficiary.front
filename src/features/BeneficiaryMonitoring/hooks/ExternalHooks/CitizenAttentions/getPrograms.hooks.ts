import { useEffect, useState } from "react";
import useCrudService from "../../../../../common/hooks/crud-service.hook";
import { urlApiBeneficiary, urlApiCitizenAttentions } from "../../../../../common/utils/base-url";
import { ApiResponse } from "../../../../../common/utils/api-response";
import { useParams } from "react-router-dom";

export const getProgramsCitizenAttentions = () => {
    const { post } = useCrudService(urlApiCitizenAttentions);
    const [programs, setProgrmas] = useState<any>([]);
    const { document } = useParams();
    const getAllPrograms = async () => {
        let data = {
            identification: document
        }
        const endpoint = "/api/v1/citizen-attention/get-programs-by-user"
        const resp: ApiResponse<[]> = await post(endpoint, data)

        setProgrmas(resp.data);
    }

    useEffect(() => {
        getAllPrograms()
    }, [])

    return { programs }
}

export const getProgramsCitizenAttention = () => {
    const { get } = useCrudService(urlApiCitizenAttentions);
    const [programs, setProgrmas] = useState<any>([]);
    const { document } = useParams();
    const getAllPrograms = async () => {

        const endpoint = "/api/v1/citizen-attention/get-programs"
        const resp: ApiResponse<[]> = await get(endpoint)

        const dataRes = resp.data.map((program) => {
            const { prg_codigo, prg_descripcion } = program
            return {
                value: prg_codigo,
                name: prg_descripcion,
            }
        })
        setProgrmas(dataRes);
    }

    useEffect(() => {
        getAllPrograms()
    }, [])

    return { programs }
}