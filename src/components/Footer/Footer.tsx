import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.content}>
        <div className={styles.column}>
          <h3 className={styles.title}>РАБОТА РОССИИ</h3>
          <p className={styles.decription}>
            Официальный портал по трудоустройству в России. Мы сотрудничаем с ведущими работодателями страны и помогаем
            найти работу мечты.
          </p>
        </div>
        <div className={styles.column}>
          <h3 className={styles.title}>Навигация</h3>
          <ul className={styles.links}>
            <li>Главная страница</li>
            <li>Все вакансии</li>
            <li>Блог о работе</li>
            <li>Города России</li>
            <li>Партнерам</li>
          </ul>
        </div>
        <div className={styles.column}>
          <h3 className={styles.title}>Контакты</h3>
          <ul className={styles.links}>
            <li>8 (800) 555-35-35</li>
            <li>info@rabota-rossii.ru</li>
            <li>Москва, ул. Трудовая, 15</li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright}>
        <p>© 2025 РАБОТА РОССИИ. Все права защищены.</p>
        <p>Партнерская программа трудоустройства. Мы сотрудничаем с ведущими работодателями страны.</p>
      </div>
    </footer>
  );
}

export default Footer;