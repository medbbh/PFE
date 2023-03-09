export interface PersonVaccinee {
  id: number;
  nni: number;
  name: string;
  prenom: string;
  age: number;
  sex: string;
  nomvaccin: string;
  nbrdose: number;
  terminervaccin:boolean;
  dateprochaine:Date;
  lieu:string;
}
