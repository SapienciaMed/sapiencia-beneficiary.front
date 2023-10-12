import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { urlApiBeneficiary } from "../../../common/utils/base-url";
import { AppContext } from "../../../common/contexts/app.context";
import useYupValidationResolver from "../../../common/hooks/form-validator.hook";
import { consultBeneficiaryMonitoringSchema } from "../../../common/schemas/beneficiaryMonitoring.schema";
import { ITableAction } from "../../../common/interfaces/table.interfaces";
import {
  IBeneficiary,
  IBeneficiaryFilters,
} from "../../../common/interfaces/beneficiaryMonitoring.interface";

export const useConsultBeneficiaryMonitoring = () => {
  //const { data: foundData };
  const navigate = useNavigate();
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

  const [formWatch, setFormWatch] = useState({
    ccBeneficiary: "",
  });

  const [founds, period, modality, creditStatus] = watch([
    "founds",
    "period",
    "modality",
    "creditStatus",
  ]);

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

  const downloadCollection = useCallback(()=>{

  },[paginateData,formWatch])

  useEffect(() => {
    const { ccBeneficiary } = formWatch;
    if (founds || period || modality || creditStatus || ccBeneficiary) {
      return setSubmitDisabled(false);
    }
    setSubmitDisabled(true);
  }, [founds, period, modality, creditStatus, formWatch]);

  return{
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
  }
};
