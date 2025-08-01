import styles from "./Select.module.css";

interface SelectProps {
  label: string;
  name: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

function Select({ label, name, options, value, onChange }: SelectProps) {
  return (
    <div className={styles.selectWrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <div className={styles.selectContainer}>
        <select className={styles.select} onChange={onChange} value={value} name={name}>
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
