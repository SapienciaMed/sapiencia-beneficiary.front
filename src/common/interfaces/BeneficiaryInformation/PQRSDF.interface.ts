export interface IPQRSDF {
  ID: number;
  PQRSDF: string;
  DateFiled: Date;
  Program: string;
  Subject: string;
  Status: string;
}

export interface IPQRSDFFilters {
  filingNumber: string;
  requestType: number;
  programId: number;
}

export interface IPQRSDFTable {
  PQRSDF: string;
  Datefiled: Date;
  Program: string;
  Issue: string;
  Status: string;
}

interface ICitizenInformation {
  fullName: string;
  dateOfBirth: string;
  numberContactOne: string;
  numberContactTwo: string;
  email: string;
  address: string;
  country: string;
  department: string;
  municipality: string;
  MeansByWhichYouWantToReceiveTheAnswer: string;
}

export interface IDetailsPQRSDF {
  idPQRSDF: string;
  filingNumber: string;
  typeOfRequest: string;
  identityDocument: string;
  typeOfEntity: string;
  citizenInformation: ICitizenInformation;
  informationOnTheRequest: any;
  internalSupportDocuments: any[];
  responsesPQRSDF: any[];
}
