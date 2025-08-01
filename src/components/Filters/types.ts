export type FilterValues = {
  search: string;
  city: string;
  jobType: string;
  salary: string;
  experience: string;
};

export type FilterOption = {
  label: string;
  name: keyof FilterValues;
  options: string[];
};


