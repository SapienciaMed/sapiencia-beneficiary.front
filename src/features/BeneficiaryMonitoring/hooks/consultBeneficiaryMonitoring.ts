import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../common/contexts/app.context";
import useYupValidationResolver from "../../../common/hooks/form-validator.hook";
import { consultBeneficiaryMonitoringSchema } from "../../../common/schemas/beneficiaryMonitoring.schema";
import { ITableAction } from "../../../common/interfaces/table.interfaces";
import {
  IBeneficiary,
  IBeneficiaryFilters,
} from "../../../common/interfaces/beneficiaryMonitoring.interface";
import { useGetAllFounds } from "./listsSapiencia/getFounds.hook";
import { useGetAllPeriod } from "./listsSapiencia/getPeriods.hook";
import { getAllModalitys } from "./listsSapiencia/getModality.hook";
import { useGetAllCreditStatus } from "./listsSapiencia/getCreditStatus.hook";
import { urlApiBeneficiary } from "../../../common/utils/base-url";
import { ApiResponse } from "../../../common/utils/api-response";
import useCrudService from "../../../common/hooks/crud-service.hook";

export const useConsultBeneficiaryMonitoring = () => {
  const navigate = useNavigate();
  const { founds } = useGetAllFounds();
  const { periods } = useGetAllPeriod();
  const { modalitys } = getAllModalitys();
  const { creditsStatus } = useGetAllCreditStatus();
  const tableComponentRef = useRef(null);
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [tableView, setTableView] = useState<boolean>(false);
  const { validateActionAccess } = useContext(AppContext);
  const [paginateData, setPaginateData] = useState({ page: "", perPage: "" });
  const resolver = useYupValidationResolver(consultBeneficiaryMonitoringSchema);
  const { post } = useCrudService(urlApiBeneficiary);
  const [loading, setLoading] = useState(null);

  const {
    control,
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({ resolver, mode: "all" });

  const [found, period, modality, creditStatus] = watch([
    "founds", "period", "modality", "creditStatus"
  ])
  const urlGetConsultBeneficiary = `${urlApiBeneficiary}/api/v1/sapiencia/beneficiary/get-all-paginated`

  const [formWatch, setFormWatch] = useState({
    ccBeneficiary: "",
  });

  const tableActions: ITableAction<IBeneficiary>[] = [
    {
      icon: "view",
      onClick: (row) => {
        navigate(`/Beneficiario/info/${row.document}/${row.foundID}`);
      },
    },
  ];

  const getInfo = async (data) => {
    try {

      const endpoint = "/api/v1/sapiencia/beneficiary/get-all-paginated"
      let newData = {
        perPage: 10,
        page: 1,
        ...data
      }
      const res: ApiResponse<[]> = await post(endpoint, newData)

      if (res.data['array'].length > 0) {
        setLoading(false)
      } else {
        setLoading(false)
        setTableView(false);
      }
    } catch (error) {
      // Handle error
    }
  }

  const handleClean = () => {
    reset();
    setSubmitDisabled(true);
    tableComponentRef.current?.emptyData();

    setTableView(false);
  };

  const onSubmit = handleSubmit((filters: IBeneficiaryFilters) => {
    setTableView(true);
    tableComponentRef.current?.loadData({
      ...filters,
    });
    setLoading(true);
    getInfo(filters)
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormWatch({
      ...formWatch,
      [name]: value,
    });
  };

  const downloadCollection = useCallback(() => {
    const { page, perPage } = paginateData;
    const { ccBeneficiary } = formWatch;
    const url = new URL(`${urlApiBeneficiary}/api/v1/sapiencia/beneficiary/generate-xlsx`);
    const params = new URLSearchParams();
    params.append("page", page + 1)
    params.append("perPage", perPage + 1)

    if (ccBeneficiary) {
      params.append("ccBeneficiary", ccBeneficiary)
    }
    if (found) {
      params.append("founds", found)
    }
    if (period) {
      params.append("period", period)
    }
    if (modality) {
      params.append("modality", modality)
    }
    if (creditStatus) {
      params.append("creditStatus", creditStatus)
    }

    url.search = params.toString();
    window.open(url.toString(), "_blank");

  }, [paginateData, formWatch, found, period, modality, creditStatus]);


  useEffect(() => {
    const { ccBeneficiary } = formWatch;

    if (found || period || modality || creditStatus != null || creditStatus != undefined || ccBeneficiary) {
      return setSubmitDisabled(false);
    }
    setSubmitDisabled(true);
  }, [found, period, modality, creditStatus, formWatch]);

  return {
    downloadCollection,
    tableComponentRef,
    setPaginateData,
    tableView,
    onSubmit,
    register,
    control,
    errors,
    isValid,
    tableActions,
    submitDisabled,
    handleChange,
    handleClean,
    validateActionAccess,
    founds,
    periods,
    modalitys,
    creditsStatus,
    urlGetConsultBeneficiary,
    loading
  };
};
