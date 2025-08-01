export interface IDetails {
  region: string;
  salary: string;
  schedule: string;
  experience: string;
  employment: string;
  payments: string;
}

export interface IVacancie {
  id: number;
  title: string;
  subtitle: string;
  icon: string;
  salary: string;
  formlink: string;
  details: IDetails[];
  responsibilities: string[];
  requirements: string[];
}
