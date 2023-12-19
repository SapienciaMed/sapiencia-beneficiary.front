export interface IHistoricalFilters {
    LegalizationPeriod: string,
    Status: string,
    periodId: number,
    programId: number,
    modalityID: number,
    NumberofSpecialSuspensions: number,
    NumberofTemporarySuspensions: number
}

export interface IHistorical {
    date: Date
    period: string
    information: string
    TypeChange: string
}
