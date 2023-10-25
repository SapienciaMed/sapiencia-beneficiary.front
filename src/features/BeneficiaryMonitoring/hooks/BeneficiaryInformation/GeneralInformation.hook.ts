import { useParams } from "react-router-dom";
import useCrudService from "../../../../common/hooks/crud-service.hook";
import { urlApiBeneficiary } from "../../../../common/utils/base-url";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { BeneficiaryInfo } from "../../../../common/interfaces/BeneficiaryInformation/GeneralInformation";
import { ApiResponse } from "../../../../common/utils/api-response";

export const useGetGeneralInformation = ()=>{
    const { control, register, reset } = useForm();
    const [Information, setInformation]= useState<BeneficiaryInfo>(null);
    const {document,foundId } = useParams();
    const data = {document,foundId}
    const {post} = useCrudService (urlApiBeneficiary)
    const getInformation = async () => {
        try {
            const endpoint = "/api/v1/sapiencia/beneficiary/get-by-document"
            const resp:ApiResponse<BeneficiaryInfo> = await post(endpoint,data)
            setInformation(resp.data[0][0][0])
            console.log(resp.data[0][0][0])
        } catch (error) {
            console.error(error)
        }
    }

    useEffect (()=>{
        getInformation()
    },[])

    useEffect(()=>{
        reset(Information)
    },[Information])

    return {control,register}
}

