import { useState } from "react";
import Select from "../../ui/Select/Select";
import styles from "./Filters.module.css";
import Search from "./Search/Search";

const optionsSelects = [
  {
    label: "Город",
    options: ["Все города", "Москва", "Санкт-Петербург", "Казань", "Екатеринбург", "Новосибирск"],
  },
  {
    label: "Тип работы",
    options: ["Все типы", "Курьер", "Повар", "Водитель"],
  },
  {
    label: "Зарплата от",
    options: ["Любая", "1 000 руб/день", "2 000 руб/день", "3 000 руб/день"],
  },
  {
    label: "Опыт работы",
    options: ["Любой", "Без опыта", "С опытом"],
  },
];

function Filters() {
  const [select, setSelect] = useState("");

  const handleChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => setSelect(event.target.value);

  return (
    <div className={styles.container}>
      <Search />
      <div className={styles.selects}>
        {optionsSelects.map((select, index) => (
          <Select key={index} label={select.label} options={select.options} onChange={handleChangeSelect} />
        ))}
      </div>
      <div className={styles.buttons}>
        <button className={styles.buttonApply}>Применить фильтры</button>
        <button className={styles.buttonReset}>Сбросить фильтры</button>
      </div>
    </div>
  );
}

export default Filters;
