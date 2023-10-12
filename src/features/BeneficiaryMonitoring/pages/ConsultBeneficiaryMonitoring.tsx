import BeneficiaryMonitoringForm from "../forms/BeneficiaryMonitoringForm/BeneficiaryMonitoringForm";
import { useConsultBeneficiaryMonitoring } from "../hooks/consultBeneficiaryMonitoring";

const ConsultBeneficiaryMonitoring = () => {
  const {
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
    downloadCollection
  } = useConsultBeneficiaryMonitoring();
  return (
    <BeneficiaryMonitoringForm
      validateActionAccess={validateActionAccess}
      register={register}
      handleChange={handleChange}
      submitDisabled={submitDisabled}
      setPaginateData={setPaginateData}
      tableComponentRef={tableComponentRef}
      tableView={tableView}
      onSubmit={onSubmit}
      tableActions={tableActions}
      control={control}
      errors={errors}
      isValid={isValid}
      handleClean={handleClean}
      downloadCollection ={downloadCollection}
    />
  );
};

export default ConsultBeneficiaryMonitoring;
