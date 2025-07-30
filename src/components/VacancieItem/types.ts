export interface IVacancie {
  title: string;
  icon: string;
  salary: string;
  subtitle: string;
  formlink: string;
  details: IDetails[];
  responsibilities: string[];
  requirements: string[];
}

export interface IDetails {
  region: string;
  salary: string;
  schedule: string;
  experience: string;
  employment: string;
  payments: string;
}