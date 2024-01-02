import {
  ButtonComponent,
  FormComponent,
  InputComponent,
  SelectComponent,
} from "../../../../common/components/Form";
import TableComponent from "../../../../common/components/table.component";
import Svgs from "../../../../public/images/icons/svgs";
import { PQRSDFHook } from "../../hooks/BeneficiaryInformation/PQRSDF.hook";
import { tableColumns } from "../../forms/BeneficiaryInformation/PQRSDF/Columns";

const PQRSDF = () => {
  const {
    onSubmit,
    handleClean,
    register,
    control,
    tableView,
    submitDisabled,
    errors,
    handleChange,
    tableActions,
    isValid,
    setPaginateData,
    tableComponentRef,
    urlGetPQRSDF,
    programs,
    subjectType,
    downloadCollection,
  } = PQRSDFHook();
  return (
    <>
      <div className="container-sections-forms mt-24px ml-16px mr-14px p-0">
        <div className="text-black large bold grid-span-2-columns pb-14px mt-24px ml-24px">
          PQRSDF presentadas por el Beneficiario
        </div>

        <FormComponent
          id="PQRSDFForm"
          className="form-signIn"
          action={onSubmit}
        >
          <div className="container-sections-forms ml-20px mr-20px">
            <div className="grid-form-5-container gap-25 mt-24px ml-16px mr-16px p-0">
              <InputComponent
                idInput="filingNumber"
                label={
                  <>
                    No.PQRSDF <span>*</span>
                  </>
                }
                register={register}
                typeInput="number"
                errors={errors}
                className="input-basic medium"
                classNameLabel="text-black big bold"
                onChange={handleChange}
              />
              <SelectComponent
                idInput="requestType"
                control={control}
                errors={errors}
                data={subjectType}
                label={<>Tipo de asunto</>}
                className="select-basic medium"
                classNameLabel="text-black big bold"
                placeholder="Seleccionar"
                filter
              />
              <SelectComponent
                idInput="programId"
                control={control}
                errors={errors}
                data={programs}
                label={<>Programa</>}
                className="select-basic medium"
                classNameLabel="text-black big bold"
                placeholder="Seleccionar"
                filter
              />
            </div>
            <div className="button-save-container-display mr-24px">
              <ButtonComponent
                value="Limpiar"
                className="button-clean bold"
                type="button"
                action={handleClean}
              />
              <ButtonComponent
                value="Buscar"
                className={`button-save ${
                  !isValid || submitDisabled ? "disabled-black" : ""
                } big`}
                type="submit"
                disabled={!isValid || submitDisabled}
              />
            </div>
          </div>
        </FormComponent>

        <>
          <div className="container-sections-forms ml-20px mr-20px">
            <TableComponent
              setPaginateData={setPaginateData}
              ref={tableComponentRef}
              url={urlGetPQRSDF}
              columns={tableColumns}
              actions={tableActions}
              isShowModal={true}
              emptyMessage="Resultado en la búsqueda"
              descriptionModalNoResult="No se generó resultado en la búsqueda"
              titleMessageModalNoResult="Resultado de búsqueda"
            />
          </div>
          <div
            style={{
              height: "1px",
              margin: "0 20px",
              backgroundColor: "#e0e0e0",
            }}
          ></div>
          {tableView && (
            <>
              <div className="button-save-container-display mr-24px">
                <ButtonComponent
                  value={
                    <>
                      <div className="container-buttonText">
                        <span>Descargar</span>
                        <Svgs svg="excel" width={23.593} height={28.505} />
                      </div>
                    </>
                  }
                  className="button-download large "
                  action={downloadCollection}
                />
              </div>{" "}
            </>
          )}
        </>
      </div>
    </>
  );
};

export default PQRSDF;
