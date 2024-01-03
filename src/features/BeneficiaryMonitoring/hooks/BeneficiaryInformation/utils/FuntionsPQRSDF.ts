import { IDetailsPQRSDF } from "../../../../../common/interfaces/BeneficiaryInformation/PQRSDF.interface";

export const createObjectDetailPQRSDF = async (
  item: any,
  dataResponse: any[]
) => {
  // console.log({ item, dataResponse });

  let resultObject: IDetailsPQRSDF = {
    idPQRSDF: "",
    filingNumber: "",
    typeOfRequest: "",
    identityDocument: "",
    typeOfEntity: "",
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
      MeansByWhichYouWantToReceiveTheAnswer: "",
    },
    informationOnTheRequest: {
      programToWhichTheApplicationApplies: "",
      subjectOfTheApplication: "",
      classification: "",
      dependency: "",
      description: "",
      filesOrDocumentsSupportingTheRequest: "",
      nameFile: "",
    },
    internalSupportDocuments: [],
    responsesPQRSDF: [],
  };

  //ID PQRSDF
  resultObject.idPQRSDF = item?.id;
  resultObject.filingNumber = item?.filingNumber;
  //Tipo de Solicitud
  resultObject.typeOfRequest = item?.requestType?.tso_description;
  //Tipo de entidad
  resultObject.typeOfEntity = item?.person?.entityType;
  //Documento de identficacion
  resultObject.identityDocument = `${item?.person?.documentType?.itemCode} ${item?.person?.identification}`;
  //Nombre Completo
  resultObject.citizenInformation.fullName = `${
    item?.person?.firstName ? item?.person?.firstName : ""
  } ${item?.person?.secondName ? item?.person?.secondName : ""} ${
    item?.person?.firstSurname ? item?.person?.firstSurname : ""
  } ${item?.person?.secondSurname ? item?.person?.secondSurname : ""}`;
  //Fecha de nacimiento
  const fechaObjeto = new Date(item?.person?.birthdate);
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
    item?.person?.firstContactNumber;
  //Numero de contacto 2
  resultObject.citizenInformation.numberContactTwo =
    item?.person?.secondContactNumber;
  //Email
  resultObject.citizenInformation.email = item?.person?.email;
  //Direccion
  resultObject.citizenInformation.address = item?.person?.address;
  //Pais
  resultObject.citizenInformation.country =
    item?.person?.country?.itemDescription;
  //Departamento
  resultObject.citizenInformation.department =
    item.person?.department?.itemDescription;
  //Municipio
  resultObject.citizenInformation.municipality =
    item.person?.municipality?.itemDescription;
  //Medio por el cual quiere recibir la respuesta
  resultObject.citizenInformation.MeansByWhichYouWantToReceiveTheAnswer =
    item.responseMedium?.mre_descripcion;
  //Informacion de la solicitud
  //Programa al que aplica la solicitud
  resultObject.informationOnTheRequest.programToWhichTheApplicationApplies =
    item.program?.prg_descripcion;
  //Asunto de la solicitud
  resultObject.informationOnTheRequest.subjectOfTheApplication =
    item.requestSubject?.aso_asunto;
  //Clasificación
  resultObject.informationOnTheRequest.classification = item?.clasification;
  //Dependencia
  resultObject.informationOnTheRequest.dependency = item?.dependency;
  //Descripción
  resultObject.informationOnTheRequest.description = item?.description;
  //Archivos o documentos que soportan la solicitud
  resultObject.informationOnTheRequest.filesOrDocumentsSupportingTheRequest =
    item?.file?.filePath;
  //Nombere del archivo
  let nameFile = item?.file?.name;
  const nameFileSplit = nameFile.split("/");
  nameFile = nameFileSplit[nameFileSplit.length - 2];
  resultObject.informationOnTheRequest.nameFile = nameFile;
  //Docuemntos internos
  const filterDataInternalSupport = [];
  for (const i of item?.supportFiles) {
    filterDataInternalSupport.push({
      user: `${i?.file?.user?.names} ${i?.file?.user?.lastNames}`,
      visibleToPetitioner: i?.visiblePetitioner === 1 ? "SI" : "NO",
      file: i?.file?.filePath,
    });
  }
  resultObject.internalSupportDocuments = filterDataInternalSupport;
  //Respuestas PQRSDF
  const filterDataResponsesPQRSDF = [];
  for (const i of dataResponse) {
    const dateObj = new Date(i?.createdAt);

    // Obtener los componentes de la fecha
    const day = dateObj.getDate();
    const mooth = dateObj.getMonth() + 1; // ¡Recuerda que los meses en JavaScript empiezan desde 0!
    const year = dateObj.getFullYear();

    // Formatear la fecha como "dd/mm/yyyy"
    const dateFormated = `${day.toString().padStart(2, "0")}/${mooth
      .toString()
      .padStart(2, "0")}/${year}`;

    //Dias trascurridos
    const dateCurrent: Date = new Date();
    const differenceInMilliseconds: number =
      dateCurrent.getTime() - dateObj.getTime();
    const daysElapsed: number = Math.floor(
      differenceInMilliseconds / (1000 * 60 * 60 * 24)
    );

    filterDataResponsesPQRSDF.push({
      date: dateFormated,
      dependecyResponse: i?.respondingDependence?.dep_descripcion,
      userResponse: `${i?.respondingUser?.names ?? ""} ${
        i?.respondingUser?.lastNames ?? ""
      }`,
      assignedDependecy: i?.assignedDependence?.dep_descripcion,
      assignedUser: `${i?.assignedUser?.names ?? ""} ${
        i?.assignedUser?.lastNames ?? ""
      }`,
      typeResponse: i?.responseType?.description,
      response: i?.observation,
      factor: i?.factorId ? i?.factorId : "N/A",
      status: i?.pqrsdf?.status?.lep_estado,
      daysOnPlatter: daysElapsed,
      file: i?.file?.filePath,
    });
  }
  resultObject.responsesPQRSDF = filterDataResponsesPQRSDF;

  return resultObject;
};
