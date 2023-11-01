import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useYupValidationResolver from "../../../../common/hooks/form-validator.hook";
import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { ITableAction } from "../../../../common/interfaces/table.interfaces";
import { consultPQRSFSchema } from "../../../../common/schemas/BeneficiaryInformation/PQRSDF.schema";
import {
  IPQRSDF,
  IPQRSDFFilters,
} from "../../../../common/interfaces/BeneficiaryInformation/PQRSDF.interface";
import { AppContext } from "../../../../common/contexts/app.context";

export const PQRSDFHook = () => {
  const navigate = useNavigate();
  const tableComponentRef = useRef(null);
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [tableView, setTableView] = useState<boolean>(false);
  const { validateActionAccess } = useContext(AppContext);
  const [paginateData, setPaginateData] = useState({ page: "", perPage: "" });
  const resolver = useYupValidationResolver(consultPQRSFSchema);
  const {
    control,
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({ resolver, mode: "all" });

  const [formWatch, setFormWatch] = useState({
    PQRSDF: "",
  });

  const [SubjectType, Program] = watch(["SubjectType", "Program"]);

  const tableActions: ITableAction<IPQRSDF>[] = [
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

  const onSubmit = handleSubmit((filters: IPQRSDFFilters) => {
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

  const downloadCollection = useCallback(() => {
    const { page, perPage } = paginateData;
  }, [paginateData, formWatch]);

  useEffect(() => {
    const { PQRSDF } = formWatch;
    if (SubjectType || Program || PQRSDF) {
      return setSubmitDisabled(true);
    }
    setSubmitDisabled(false);
  }, [SubjectType, Program, formWatch]);

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
    tableComponentRef

  };
};
