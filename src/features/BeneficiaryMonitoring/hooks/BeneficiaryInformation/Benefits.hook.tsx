import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { urlApiBeneficiary } from "../../../../common/utils/base-url";
import useCrudService from "../../../../common/hooks/crud-service.hook";
import { ApiResponse } from "../../../../common/utils/api-response";
import { AppContext } from "../../../../common/contexts/app.context";
import SocialServicesModal from "../../forms/BeneficiaryInformation/Benefits/SocialServices/SocialServicesModal";
import { useGetAllFounds } from "../listsSapiencia/getFounds.hook";
import { getAllModalitys } from "../listsSapiencia/getModality.hook";
import { useForm } from "react-hook-form";
import { IBenefitsFilters } from "../../../../common/interfaces/BeneficiaryInformation/Benefits.interface";
import { formaterNumberToCurrency } from "../../../../common/utils/helpers";

export const getDataBenefits = () => {
  const { founds } = useGetAllFounds();
  const { modalitys } = getAllModalitys();
  const [InformationBenefits, setInformationBenefits] = useState(null);
  const { post } = useCrudService(urlApiBeneficiary);
  const [totalBenefits, setTotalBenefits] = useState(null);
  const tableComponentRef = useRef(null);
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [tableView, setTableView] = useState<boolean>(false);
  const navigate = useNavigate();
  const { document } = useParams();
  const { setMessage } = useContext(AppContext);

  const getInformationBenefits = async (data) => {
    try {
      const { modality, founds } = data;
      const foundId = founds;
      const modalityId = modality;
      const dataBenefits = {
        page: 1,
        perPage: 1000,
        document,
        foundId,
        modalityId,
      };
      console.log(dataBenefits);
      const endpoint = "/api/v1/sapiencia/beneficiary/getBenefits";
      const resp: ApiResponse<[]> = await post(endpoint, dataBenefits);

      const dataRes = resp.data["array"];
      dataRes.forEach((element) => {
        element.OrderEnrollment = formaterNumberToCurrency(
          element.OrderEnrollment
        );
        element.OrderSustenance = formaterNumberToCurrency(
          element.OrderSustenance
        );
        element.TotalOrder = formaterNumberToCurrency(element.TotalOrder);
      });
      setInformationBenefits(dataRes);
      setTotalBenefits(resp.data["array"].length);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {}, []);

  //Social Services
  // const [InformationSocialServices, setInformationSocialServices] =
  //   useState(null);
  // const { setMessage } = useContext(AppContext);
  // const data = { document, foundId };

  const {
    control,
    handleSubmit,
    register,
    reset,
    watch,
    formState: { errors, isValid },
  } = useForm();

  const [found, modality] = watch(["founds", "modality"]);

  const showSocialServices = (rowData) => {
    console.log(rowData, found, modality);
    setMessage({
      title: "Servicio Social",
      show: true,
      description: (
        <SocialServicesModal
          period={rowData}
          found={found}
          modality={modality}
        />
      ),
      size: "medium",
      background: true,
    });
  };

  useEffect(() => {
    if (found || modality) {
      return setSubmitDisabled(false);
    }
    setSubmitDisabled(true);
  }, [found, modality]);
  const handleClean = () => {
    reset();
    setSubmitDisabled(true);
    tableComponentRef.current?.emptyData();
    setTableView(false);
  };
  const onSubmit = handleSubmit((filters: IBenefitsFilters) => {
    setTableView(true);
    getInformationBenefits(filters);
  });

  return {
    founds,
    modalitys,
    InformationBenefits,
    totalBenefits,
    control,
    errors,
    handleClean,
    isValid,
    submitDisabled,
    onSubmit,
    tableView,
    showSocialServices,
  };
};
