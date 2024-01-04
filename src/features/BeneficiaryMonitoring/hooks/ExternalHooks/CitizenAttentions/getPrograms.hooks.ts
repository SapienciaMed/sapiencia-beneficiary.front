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
        const endpoint = "/api/v1/pqrsdf/get-programs-by-user"
        const resp: ApiResponse<[]> = await post(endpoint, data)

        setProgrmas(resp.data);
    }
    useEffect(() => {
        getAllPrograms()
    }, [])

    return { programs }
}

export const getProgramsCitizenAttention = () => {
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