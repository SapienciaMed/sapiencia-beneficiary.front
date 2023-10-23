import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useYupValidationResolver from "../../../../common/hooks/form-validator.hook";
import { consultPQRSFSchema } from "../../../../common/schemas/BeneficiaryInformation/PQRSDF.schema";
import { useForm } from "react-hook-form";
import { ITableAction } from "../../../../common/interfaces/table.interfaces";
import { IAttentios, IAttentiosFilter } from "../../../../common/interfaces/BeneficiaryInformation/Attentions.interface";
import { consultAttentioschema } from "../../../../common/schemas/BeneficiaryInformation/Attentions.schema";

export const AttentionsHook = () => {
  const navigate = useNavigate();
  const tableComponentRef = useRef(null);
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [tableView, setTableView] = useState<boolean>(false);
  const [paginateData, setPaginateData] = useState({ page: "", perPage: "" });
  const resolver = useYupValidationResolver(consultAttentioschema);
  const {
    control,
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm({ resolver, mode: "all" });

  const [registrationDate, Program] = watch(["registrationDate", "Program"]);

  const handleClean = () => {
    reset();
    setSubmitDisabled(true);
    tableComponentRef.current?.emptyData();
    setTableView(false);
  };

  const tableActions: ITableAction<IAttentios>[] = [
    {
      icon: "Detail",
      onClick: (row) => {
        navigate(`#`);
      },
    },
  ];
  const onSubmit = handleSubmit((filters: IAttentiosFilter) => {
    setTableView(true);
    tableComponentRef.current?.loadData({
      ...filters,
    });
  });

  const downloadCollection = useCallback(() => {}, [paginateData]);
  useEffect(() => {
    if (registrationDate || Program ) {
      return setSubmitDisabled(true);
    }
    setSubmitDisabled(false);
  }, [registrationDate, Program]);
  return {
    downloadCollection,
    onSubmit,
    handleClean,
    register,
    control,
    tableView,
    submitDisabled,
    errors,
    tableActions,
    isValid
  }
};
