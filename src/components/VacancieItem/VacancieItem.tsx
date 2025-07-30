import { useState } from "react";
import type { IDetails, IVacancie } from "./types";
import styles from "./VacancieItem.module.css";

function VacancieItem({ title, icon, salary, subtitle, formlink, details, responsibilities, requirements }: IVacancie) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function handleClickButtonFillForm() {
    window.location.href = formlink;
  }

  function handleClickShowDetails() {
    setIsOpen(!isOpen);
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <img className={styles.icon} src={icon} alt="icon" />
        <div className={styles.titleContainer}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>
        <div className={styles.salary}>{salary}</div>
      </div>
      <div className={styles.buttons}>
        <button onClick={handleClickShowDetails} className={styles.showVacancie}>
          {isOpen ? "Скрыть вакансию" : "Посмотреть вакансию"}
        </button>
        <button onClick={handleClickButtonFillForm} className={styles.showForm}>
          Заполнить анкету
        </button>
      </div>
      <div className={`${styles.detailsWrapper} ${isOpen ? styles.open : ""}`}>
        <div>
          <div className={styles.detailsContainer}>
            {details.map((detail: IDetails, index) => (
              <div key={index} className={styles.details}>
                <h3 className={styles.metaTitle}>Подробная информация</h3>
                <p className={styles.detailItem}>Регион: {detail.region}</p>
                <p className={styles.detailItem}>Зарплата: {detail.salary}</p>
                <p className={styles.detailItem}>График: {detail.schedule}</p>
                <p className={styles.detailItem}>Опыт: {detail.experience}</p>
                <p className={styles.detailItem}>Тип занятости: {detail.employment}</p>
                <p className={styles.detailItem}>Выплаты: {detail.employment}</p>
              </div>
            ))}
            <div className={styles.responsibilities}>
              <h3 className={styles.metaTitle}>Обязанности</h3>
              <ul>
                {responsibilities.map((responsibilitie, index) => (
                  <li key={index} className={styles.detailItem}>
                    {responsibilitie}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className={styles.requirements}>
            <h3 className={styles.requirementsTitle}>Требования к кандидатам</h3>
            <ul>
              {requirements.map((requirement, index) => (
                <li key={index} className={styles.detailItem}>
                  {requirement}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VacancieItem;
