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
import * as XLSX from "xlsx"

export const useConsultBeneficiaryMonitoring = () => {
  const navigate = useNavigate();
  const { founds } = useGetAllFounds();
  const { periods } = useGetAllPeriod();
  const { modalitys } = getAllModalitys();
  const { creditsStatus } = useGetAllCreditStatus();
  const tableComponentRef = useRef(null);
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [tableView, setTableView] = useState<boolean>(false);
  const [loading,setLoading] = useState (false);
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

  const [found,period,modality,creditStatus]= watch([
    "founds","period","modality","creditStatus"
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

  const handleClean = () => {
    reset();
    setSubmitDisabled(true);
    tableComponentRef.current?.emptyData();
    setTableView(false);
    setLoading(false);
  };

  const onSubmit = handleSubmit((filters: IBeneficiaryFilters) => {
    setTableView(true);
    setLoading(true);
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

  const downloadCollection = useCallback((paginateData) => {
    console.log(paginateData)
      // const book = XLSX.utils.book_new()
      // const sheets = XLSX.utils.json_to_sheet(paginateData)
      // XLSX.utils.book_append_sheet(book,sheets,"Beneficiarios")
      // XLSX.writeFile (book, "Beneficiarios.xlsx");
  },[paginateData]);


  useEffect(() => {
    const { ccBeneficiary } = formWatch;
    if (found || period || modality || creditStatus || ccBeneficiary) {
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
