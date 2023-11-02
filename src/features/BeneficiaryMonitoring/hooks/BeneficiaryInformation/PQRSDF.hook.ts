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


  console.log(programs, subjectType)
  const {
    control,
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({ resolver, mode: "all" });
  const { document, foundId } = useParams();

  const [formWatch, setFormWatch] = useState({
    PQRSDF: "",
  });

  const [SubjectType, Program] = watch(["SubjectType", "Program"]);

  const tableActions: ITableAction<IPQRSDF>[] = [
    {
      icon: "view",
      onClick: (row) => {
        navigate(`#`);
      },
    },
  ];

  const urlGetPQRSDF = `${urlApiBeneficiary}/api/v1/sapiencia/beneficiary/pqrsdf/get-paginated`

  const handleClean = () => {
    reset();
    setSubmitDisabled(true);
    tableComponentRef.current?.emptyData();
    setTableView(false);
  };

  const onSubmit = handleSubmit((filters: IPQRSDFFilters) => {
    setTableView(true);
    let identification = '45542511'
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

  const downloadCollection = useCallback(() => {
    const { page, perPage } = paginateData;
  }, [paginateData, formWatch]);

  useEffect(() => {
    const { PQRSDF } = formWatch;
    if (PQRSDF) {
      return setSubmitDisabled(true);
    }
    setSubmitDisabled(false);
  }, [formWatch]);

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
