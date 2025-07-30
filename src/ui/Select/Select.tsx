import styles from './Select.module.css';
import type { ISelect } from './types';

function Select({ label, options, onChange }: ISelect) {
  return (
    <div className={styles.selectWrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.selectContainer}>
        <select 
          className={styles.select}
          onChange={onChange}
        >
          {options.map((option, index) => (
            <option key={index} value={option} className={styles.option}>
              {option}
            </option>
          ))}
        </select>
        <div className={styles.arrow}></div>
      </div>
    </div>
  );
}

export default Select;