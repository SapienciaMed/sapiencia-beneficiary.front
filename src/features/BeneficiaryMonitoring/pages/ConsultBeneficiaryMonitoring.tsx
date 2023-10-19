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
    downloadCollection,
    founds,
    periods,
    modalitys,
    creditsStatus
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
      founds = {founds}
      periods = {periods}
      modalitys = {modalitys}
      creditsStatus = {creditsStatus}
    />
  );
};

export default ConsultBeneficiaryMonitoring;
