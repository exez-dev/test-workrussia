import { useState, useEffect } from "react";
import VacancieItem from "../VacancieItem/VacancieItem";
import styles from "./VacanciesList.module.css";
import vacanciesInfo from "../../data/vacanciesData.json";
import type { FilterValues } from "../../components/Filters/types";
import type { IVacancie } from "./types";

interface VacanciesListProps {
  filters: FilterValues;
}

function VacanciesList({ filters }: VacanciesListProps) {
  const [filteredVacancies, setFilteredVacancies] = useState<IVacancie[]>(vacanciesInfo);

  useEffect(() => {
    filterVacancies(filters);
  }, [filters]);

  const filterVacancies = (filters: FilterValues) => {
    let result = [...vacanciesInfo];

    if (filters.search) {
      const searchTerm = filters.search.toLowerCase();
      result = result.filter(
        v => v.title.toLowerCase().includes(searchTerm) || v.subtitle.toLowerCase().includes(searchTerm),
      );
    }

    if (filters.city !== "Все города") {
      result = result.filter(v => v.details.some(d => d.region.includes(filters.city)));
    }

    if (filters.jobType !== "Все типы") {
      result = result.filter(v => v.title.includes(filters.jobType) || v.subtitle.includes(filters.jobType));
    }

    if (filters.salary !== "Любая") {
      const salaryValue = parseInt(filters.salary.replace(/\D/g, ""));
      result = result.filter(v => {
        const vacSalary = parseInt(v.salary.replace(/\D/g, ""));
        return vacSalary >= salaryValue;
      });
    }

    if (filters.experience !== "Любой") {
      const needExperience = filters.experience === "С опытом";
      result = result.filter(v =>
        v.details.some(
          d => (needExperience && d.experience !== "Без опыта") || (!needExperience && d.experience === "Без опыта"),
        ),
      );
    }

    setFilteredVacancies(result);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Актуальные вакансии</h2>
      {filteredVacancies.map(vacancie => (
        <VacancieItem
          key={vacancie.id}
          title={vacancie.title}
          subtitle={vacancie.subtitle}
          icon={vacancie.icon}
          salary={vacancie.salary}
          formlink={vacancie.formlink}
          details={vacancie.details}
          responsibilities={vacancie.responsibilities}
          requirements={vacancie.requirements}
        />
      ))}
    </div>
  );
}

export default VacanciesList;
