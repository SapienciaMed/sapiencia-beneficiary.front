export interface IPQRSDF {
    ID:number,
    PQRSDF:string,
    DateFiled: Date,
    Program: string,
    Subject : string,
    Status : string
}

export interface IPQRSDFFilters {
    PQRSDF:string,
    Subject : number,
    Program : number,
}