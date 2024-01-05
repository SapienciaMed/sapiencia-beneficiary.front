import { useCallback, useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useYupValidationResolver from "../../../../common/hooks/form-validator.hook";
import { useForm } from "react-hook-form";
import { ITableAction } from "../../../../common/interfaces/table.interfaces";
import {
  IAttentions,
  IAttentionsFilter,
} from "../../../../common/interfaces/BeneficiaryInformation/Attentions.interface";
import { consultAttentioschema } from "../../../../common/schemas/BeneficiaryInformation/Attentions.schema";
import { getProgramsCitizenAttention } from "../ExternalHooks/CitizenAttentions/getPrograms.hooks";
import { getRequestType } from "../ExternalHooks/CitizenAttentions/getRequestType.hook";
import { AppContext } from "../../../../common/contexts/app.context";
import DetailsAttentions from "../../forms/BeneficiaryInformation/Attentions/DetailsAttentions";

export const AttentionsHook = () => {
  const navigate = useNavigate();
  const tableComponentRef = useRef(null);
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [tableView, setTableView] = useState<boolean>(false);
  const [paginateData, setPaginateData] = useState({ page: "", perPage: "" });
  const resolver = useYupValidationResolver(consultAttentioschema);
  const { programs } = getProgramsCitizenAttention();
  const { document } = useParams();
  const { requestTypes } = getRequestType();
  const { setMessage } = useContext(AppContext);
  const {
    control,
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm();

  const [registrationDate, Program, requestSubjectType] = watch([
    "createdAt",
    "programId",
    "requestSubjectTypeId",
  ]);

  const url = `https://sapiencia-citizen-attention-api-ukyunq2uxa-uc.a.run.app/api/v1/citizen-attention/get-by-filters`;
  const handleClean = () => {
    reset();
    setSubmitDisabled(true);
    tableComponentRef.current?.emptyData();
    setTableView(false);
  };

  useEffect(() => {
    let identification = document;
    let data = {
      page: 1,
      perPage: 10,
      identification,
    };
    tableComponentRef.current?.loadData({
      ...data,
    });
  }, []);

  const tableActions: ITableAction<IAttentions>[] = [
    {
      icon: "view",
      onClick: (row) => {
        setMessage({
          show: true,
          background: true,
          description: <DetailsAttentions data={row} />,
          title: "Informacion de la atencion",
          size: "items",
          onOk: () => {
            setMessage({ show: false });
          },
        });
      },
    },
  ];
  const onSubmit = handleSubmit((filters: IAttentionsFilter) => {
    setTableView(false);
    setTableView(true);
    let identification = document;
    tableComponentRef.current?.loadData({
      identification,
      ...filters,
    });
  });

  const downloadCollection = useCallback(() => {}, [paginateData]);
  useEffect(() => {
    if (registrationDate || Program || requestSubjectType) {
      return setSubmitDisabled(false);
    }
    setSubmitDisabled(true);
  }, [registrationDate, Program, requestSubjectType]);
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
    isValid,
    programs,
    setPaginateData,
    tableComponentRef,
    url,
    requestTypes,
  };
};
