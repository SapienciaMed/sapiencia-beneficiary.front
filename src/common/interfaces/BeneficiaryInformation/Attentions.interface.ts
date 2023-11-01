export interface IAttentions {
  ID: number;
  registrationDate: Date;
  Typeofrequest: string;
  dependence: string;
  program: string;
  ApplicationTopic: string;
}
export interface IAttentionsTable {
  registrationDate: Date;
  Typeofrequest: string;
  dependence: string;
  program: string;
  ApplicationTopic: string;
}

export interface IAttentionsFilter {
  registrationDate: Date;
  program: number;
}
