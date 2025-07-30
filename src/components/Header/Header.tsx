import styles from "./Header.module.css";
import logo from "../../assets/logo.png";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logoContainer}>
        <img className={styles.logo} src={logo} alt="logo" />
        <h1>РАБОТА РОССИИ</h1>
      </div>
      <p className={styles.subtitle}>Найди лучшую работу в своем городе среди тысяч актуальных вакансий</p>
    </header>
  );
}

export default Header;