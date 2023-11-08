export interface IPQRSDF {
    ID: number,
    PQRSDF: string,
    DateFiled: Date,
    Program: string,
    Subject: string,
    Status: string
}

export interface IPQRSDFFilters {
    filingNumber: string,
    requestType: number,
    programId: number,
}

export interface IPQRSDFTable {
    PQRSDF: string;
    Datefiled: Date;
    Program: string;
    Issue: string;
    Status: string;
}