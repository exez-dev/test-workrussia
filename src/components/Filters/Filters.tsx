import { useState } from "react";
import Select from "../../ui/Select/Select";
import styles from "./Filters.module.css";
import Search from "./Search/Search";
import type { FilterValues, FilterOption } from "./types";

const filterOptions: FilterOption[] = [
  {
    label: "Город",
    name: "city",
    options: ["Все города", "Москва", "Санкт-Петербург", "Казань", "Екатеринбург", "Новосибирск"],
  },
  {
    label: "Тип работы",
    name: "jobType",
    options: ["Все типы", "Курьер", "Повар", "Водитель"],
  },
  {
    label: "Зарплата от",
    name: "salary",
    options: ["Любая", "1 000 руб/день", "2 000 руб/день", "3 000 руб/день"],
  },
  {
    label: "Опыт работы",
    name: "experience",
    options: ["Любой", "Без опыта", "С опытом"],
  },
];

interface FiltersProps {
  onFilterChange: (filters: FilterValues) => void;
  onReset: () => void;
}

function Filters({ onFilterChange, onReset }: FiltersProps) {
  const [filters, setFilters] = useState<FilterValues>({
    search: "",
    city: "Все города",
    jobType: "Все типы",
    salary: "Любая",
    experience: "Любой",
  });

  const handleSearchChange = (value: string) => {
    const newFilters = { ...filters, search: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleSelectChange = (name: keyof FilterValues, value: string) => {
    const newFilters = { ...filters, [name]: value };
    setFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    const resetFilters: FilterValues = {
      search: "",
      city: "Все города",
      jobType: "Все типы",
      salary: "Любая",
      experience: "Любой",
    };
    setFilters(resetFilters);
    onReset();
  };

  return (
    <div className={styles.container}>
      <Search value={filters.search} onChange={handleSearchChange} />
      <div className={styles.selects}>
        {filterOptions.map(option => (
          <Select
            key={option.name}
            label={option.label}
            name={option.name}
            value={filters[option.name]}
            options={option.options}
            onChange={e => handleSelectChange(option.name, e.target.value)}
          />
        ))}
      </div>
      <div className={styles.buttons}>
        <button className={styles.buttonReset} onClick={handleReset}>
          Сбросить фильтры
        </button>
      </div>
    </div>
  );
}

export default Filters;
