import { IDetailsPQRSDF } from "../../../../../common/interfaces/BeneficiaryInformation/PQRSDF.interface";

export const createObjectDetailPQRSDF = (item: any) => {
  let resultObject: IDetailsPQRSDF = {
    typeOfRequest: "", // Preguntar por esta
    identityDocument: "",
    typeOfEntity: "", // Preguntar por esta
    citizenInformation: {
      fullName: "",
      dateOfBirth: "",
      numberContactOne: "",
      numberContactTwo: "",
      email: "",
      address: "",
      country: "",
      department: "",
      municipality: "",
      MeansByWhichYouWantToReceiveTheAnswer: "", // Preguntar por esta
    },
    informationOnTheRequest: {
      programToWhichTheApplicationApplies: "", // Preguntar por esta
      subjectOfTheApplication: "", // Preguntar por esta
      classification: "", // Preguntar por esta
      dependency: "", // Preguntar por esta
      description: "", // Preguntar por esta
      filesOrDocumentsSupportingTheRequest: "", // Preguntar por esta
    },
  };

  //Documento de identficacion
  resultObject.identityDocument = `${item.person.documentType.itemCode} ${item.person.identification}`;
  //Nombre Completo
  resultObject.citizenInformation.fullName = `${
    item.person.firstName ? item.person.firstName : ""
  } ${item.person.secondName ? item.person.secondName : ""} ${
    item.person.firstSurname ? item.person.firstSurname : ""
  } ${item.person.secondSurname ? item.person.secondSurname : ""}`;
  //Fecha de nacimiento
  const fechaObjeto = new Date(item.person.birthdate);
  const dia = fechaObjeto.getUTCDate();
  const mes = fechaObjeto.getUTCMonth() + 1;
  const anio = fechaObjeto.getUTCFullYear();
  const dateOfBirth =
    (dia < 10 ? "0" : "") +
    dia +
    "/" +
    (mes < 10 ? "0" : "") +
    mes +
    "/" +
    anio;
  resultObject.citizenInformation.dateOfBirth = dateOfBirth;
  //Numero de contacto 1
  resultObject.citizenInformation.numberContactOne =
    item.person.firstContactNumber;
  //Numero de contacto 2
  resultObject.citizenInformation.numberContactTwo =
    item.person.secondContactNumber;
  //Email
  resultObject.citizenInformation.email = item.person.email;
  //Direccion
  resultObject.citizenInformation.address = item.person.address;
  //Pais
  resultObject.citizenInformation.country = item.person.country.itemDescription;
  //Departamento
  resultObject.citizenInformation.department =
    item.person.department.itemDescription;
  //Municipio
  resultObject.citizenInformation.municipality =
    item.person.municipality.itemDescription;
  //Medio por el cual quiere recibir la respuesta
  resultObject.citizenInformation.MeansByWhichYouWantToReceiveTheAnswer =
    item.person.municipality.itemDescription;

  console.log({ resultObject });

  return resultObject;
};
