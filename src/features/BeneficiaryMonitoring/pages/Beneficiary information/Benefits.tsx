import { memo } from "react";
import BenefitsForm from "../../forms/BeneficiaryInformation/Benefits/BenefitsForm";
import { getDataBenefits } from "../../hooks/BeneficiaryInformation/Benefits.hook";

const Benefits = () => {
  return <BenefitsForm />;
};

export default memo(Benefits);
