export interface IBeneficiary {
    typeDocument: string;
    document: number;
    fullName: string;
    found: string;
    period: string;
    modality: string;
    creditStatus: string;
}

export interface IBeneficiaryFilters{
    ccBeneficiary: number;
    found:number;
    period: number;
    modality: number;
    creditStatus:number;
}

export interface IBeneficiaryTable{
    document: number;
    fullName: string;
    found: number;
    period: number;
    modality: number;
    creditStatus:number
}