import styles from "./Search.module.css";
import SearchIcon from "../../../assets/icons/search-icon.png";

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
}

function Search({ value, onChange }: SearchProps) {
  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        type="text"
        placeholder="Название профессии..."
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <button className={styles.button}>
        <img className={styles.icon} src={SearchIcon} alt="search-icon" />
      </button>
    </div>
  );
}

export default Search;
