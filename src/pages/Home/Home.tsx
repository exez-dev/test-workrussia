import { useState } from "react";
import Filters from "../../components/Filters/Filters";
import PaperList from "../../components/PaperList/PaperList";
import VacanciesList from "../../components/VacanciesList/VacanciesList";
import type { FilterValues } from "../../components/Filters/types";

function Home() {
  const [filters, setFilters] = useState<FilterValues>({
    search: "",
    city: "Все города",
    jobType: "Все типы",
    salary: "Любая",
    experience: "Любой",
  });

  const handleFilterChange = (newFilters: FilterValues) => {
    setFilters(newFilters);
  };

  const handleResetFilters = () => {
    setFilters({
      search: "",
      city: "Все города",
      jobType: "Все типы",
      salary: "Любая",
      experience: "Любой",
    });
  };

  return (
    <>
      <Filters onFilterChange={handleFilterChange} onReset={handleResetFilters} />
      <VacanciesList filters={filters} />
      <PaperList />
    </>
  );
}

export default Home;
