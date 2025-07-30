import styles from "./Search.module.css";
import SearchIcon from "../../../assets/icons/search-icon.png";

function Search() {
  return (
    <div className={styles.container}>
      <input className={styles.input} type="text" placeholder="Название профессии..."/>
      <button className={styles.button}><img className={styles.icon} src={SearchIcon} alt="search-icon" /></button>
    </div>
  );
}

export default Search;