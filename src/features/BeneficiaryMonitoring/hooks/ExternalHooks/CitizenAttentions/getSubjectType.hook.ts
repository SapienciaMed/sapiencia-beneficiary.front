import { useEffect, useState } from "react";
import useCrudService from "../../../../../common/hooks/crud-service.hook";
import { urlApiBeneficiary, urlApiCitizenAttentions } from "../../../../../common/utils/base-url";
import { ApiResponse } from "../../../../../common/utils/api-response";
import { useParams } from "react-router-dom";

export const getSubjectTypeCitizenAttentions = () => {
    const { post } = useCrudService(urlApiCitizenAttentions);
    const [subjectType, setSubjectType] = useState<any>([]);
    const { document } = useParams();
    const getAllSubjectType = async () => {

        try {
            let data = {
                identification: document
            }
            const endpoint = "/api/v1/citizen-attention/get-subject-by-user"
            const resp: ApiResponse<[]> = await post(endpoint, data)

            const dataRes = resp.data
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