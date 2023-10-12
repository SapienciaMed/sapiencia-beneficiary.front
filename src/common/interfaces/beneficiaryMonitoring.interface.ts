export interface IBeneficiary {
    id:number;
    typeDocument: string;
    document: number;
    fullName: string;
    found: number;
    period: number;
    modality: number;
    creditStatus:number
}

export interface IBeneficiaryFilters{
    ccBeneficiary: number;
    found:string;
    period: number;
    modality: number;
    creditStatus:number;
}

export interface IBeneficiaryTable{
    typeDocument: string;
    document: number;
    fullName: string;
    found: number;
    period: number;
    modality: number;
    creditStatus:number
}