export interface PersonVaccinee {
  id: number;
  nni: number;
  name: string;
  prenom: string;
  age: number;
  sex: string;
  nomvaccin: string;
  nbrdose: number;
  terminervaccin:string;
  dateprochaine:Date;
  dateactuel:Date;
  lieu:string;
}
