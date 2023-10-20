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

  const {
    control,
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({ resolver, mode: "all" });

  const [fonud,period,modality,creditStatus]= watch([
    "founds","period","modality","creditStatus"
  ])
  const urlGetConsultBeneficiary = `${urlApiBeneficiary}/api/v1/sapiencia/beneficiary/get-all-paginated`

  const [formWatch, setFormWatch] = useState({
    ccBeneficiary: "",
  });

  const tableActions: ITableAction<IBeneficiary>[] = [
    {
      icon: "Detail",
      onClick: (row) => {
        navigate(`#`);
      },
    },
  ];

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
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormWatch({
      ...formWatch,
      [name]: value,
    });
  };

  const downloadCollection = useCallback(() => {}, [paginateData, formWatch]);


  useEffect(() => {
    const { ccBeneficiary } = formWatch;
    if (fonud || period || modality || creditStatus || ccBeneficiary) {
      return setSubmitDisabled(true);
    }
    setSubmitDisabled(false);
  }, [founds, periods, modalitys, creditsStatus, formWatch]);

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
    urlGetConsultBeneficiary
  };
};
