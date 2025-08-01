import { useNavigate } from "react-router-dom";
import styles from "./PaperItem.module.css";
import type { IPaper } from "./types";

function PaperItem({ id, title, city, description }: IPaper) {
  const navigate = useNavigate();

  const handleClickButtonPaper = () => navigate(`/paper/${id}`);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.city}>{city}</div>
      <div className={styles.decriptionBlock}>
        <p className={styles.decription}>{description}</p>
      </div>
      <button onClick={handleClickButtonPaper} className={styles.button}>
        Читать статью
      </button>
    </div>
  );
}

export default PaperItem;
