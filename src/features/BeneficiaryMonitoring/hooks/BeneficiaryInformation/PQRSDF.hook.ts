import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import useYupValidationResolver from "../../../../common/hooks/form-validator.hook";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { ITableAction } from "../../../../common/interfaces/table.interfaces";
import { consultPQRSFSchema } from "../../../../common/schemas/BeneficiaryInformation/PQRSDF.schema";
import {
  IPQRSDF,
  IPQRSDFFilters,
} from "../../../../common/interfaces/BeneficiaryInformation/PQRSDF.interface";
import { AppContext } from "../../../../common/contexts/app.context";
import { urlApiBeneficiary } from "../../../../common/utils/base-url";
import { getProgramsCitizenAttentions } from "../ExternalHooks/CitizenAttentions/getPrograms.hooks";
import { getSubjectTypeCitizenAttentions } from "../ExternalHooks/CitizenAttentions/getSubjectType.hook";
import { ApiResponse } from "../../../../common/utils/api-response";
import useCrudService from "../../../../common/hooks/crud-service.hook";
import * as XLSX from "xlsx"
export const PQRSDFHook = () => {
  const navigate = useNavigate();
  const tableComponentRef = useRef(null);
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [tableView, setTableView] = useState<boolean>(false);
  const { validateActionAccess } = useContext(AppContext);
  const [paginateData, setPaginateData] = useState({ page: "", perPage: "" });
  const resolver = useYupValidationResolver(consultPQRSFSchema);
  const { programs } = getProgramsCitizenAttentions()
  const { subjectType } = getSubjectTypeCitizenAttentions()
  const { post } = useCrudService(urlApiBeneficiary);

  const {
    control,
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({ resolver, mode: "all" });
  const { document } = useParams();

  const [formWatch, setFormWatch] = useState({
    filingNumber: "",
  });

  const [requestType, programId] = watch(["requestType", "programId"]);

  const tableActions: ITableAction<IPQRSDF>[] = [
    {
      icon: "view",
      onClick: (row) => {
        navigate(`#`);
      },
    },
  ];

  const urlGetPQRSDF = `${urlApiBeneficiary}/api/v1/sapiencia/external/citizenAttentions/pqrsdf/get-paginated`

  const handleClean = () => {
    reset();
    setSubmitDisabled(true);
    tableComponentRef.current?.emptyData();
    setTableView(false);
  };

  const onSubmit = handleSubmit((filters: IPQRSDFFilters) => {
    setTableView(true);
    let identification = document
    tableComponentRef.current?.loadData({
      identification,
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

  const downloadCollection = async () => {
    const { filingNumber } = formWatch;
    let identification = document
    const data = {
      page: 1,
      perPage: 1000,
      identification,
      filingNumber,
      requestType,
      programId
    }
    const endpoint = "/api/v1/sapiencia/external/citizenAttentions/pqrsdf/get-paginated";
    const resp: ApiResponse<[]> = await post(endpoint, data);
    const dataRes = resp.data["array"];
    let dataPqrsdf = dataRes.map((data) => {
      return {
        ID: data.id,
        NoPQRSDF: data.filingNumber,
        Fecha_Radicado: data.createdAt,
        Programa: data.program?.prg_descripcion,
        Asunto: data.requestSubject.aso_asunto,
        Estado: data.status.lep_estado
      }
    })
    const book = XLSX.utils.book_new()
    const sheet = XLSX.utils.json_to_sheet(dataPqrsdf)

    XLSX.utils.book_append_sheet(book, sheet, "PQRSDF")

    setTimeout(() => {
      XLSX.writeFile(book, "PQRSDF.xlsx")
    }, 1000)

    // const url = new URL(`${urlApiBeneficiary}/api/v1/sapiencia/external/citizenAttentions/pqrsdfXLSX`);
    // const params = new URLSearchParams();
    // params.append("page", "1")
    // params.append("perPage", "1000")
    // params.append("identification", identification)

    // if (filingNumber) {
    //   params.append("filingNumber", filingNumber)
    // }
    // if (requestType) {

    //   params.append("requestType", requestType)
    // }
    // if (programId) {

    //   params.append("programId", programId)
    // }


    // url.search = params.toString();
    // window.open(url.toString(), "_blank");
  };


  useEffect(() => {
    const { filingNumber } = formWatch;
    if (filingNumber || requestType || programId) {
      return setSubmitDisabled(false);
    }
    setSubmitDisabled(true);
  }, [formWatch, requestType, programId]);

  return {
    downloadCollection,
    onSubmit,
    setPaginateData,
    handleClean,
    register,
    control,
    tableView,
    submitDisabled,
    errors,
    handleChange,
    tableActions,
    isValid,
    tableComponentRef,
    urlGetPQRSDF,
    programs,
    subjectType
  };
};
