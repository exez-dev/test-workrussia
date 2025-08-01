import styles from "./PaperDesc.module.css";
import { useNavigate, useParams } from "react-router-dom";
import arrowIcon from "../../assets/icons/left-arrow.svg";
import { useEffect, useState } from "react";
import type { IPaper } from "../../components/PaperItem/types";

function PaperDesc() {
  const [paperData, setPaperData] = useState<IPaper[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPaperDesc() {
      try {
        setIsLoading(true);
        const response = await fetch("https://sheetdb.io/api/v1/9rfiyei9q87ih");

        if (!response.ok) {
          throw new Error("Ошибка запроса!");
        }

        const data = await response.json();
        setPaperData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Неизвестная ошибка");
      } finally {
        setIsLoading(false);
      }
    }

    fetchPaperDesc();
  }, []);

  const paper = paperData.find(paper => String(paper.id) === String(id));

  const handleClickArrowBack = () => navigate(-1);

  if (isLoading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  if (!paper) {
    return <div>Статья не найдена!</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.backBlock}>
        <img onClick={handleClickArrowBack} src={arrowIcon} alt="arrow" className={styles.arrowIcon} />
      </div>
      <div className={styles.header}>
        <h1>{paper.title}</h1>
        <div className={styles.meta}>
          <span>{paper.creationDate}</span>
          <span>{paper.author}</span>
          <span>{paper.city}</span>
        </div>
      </div>
      <div className={styles.content}>
        <p>{paper.text}</p>
      </div>
    </div>
  );
}

export default PaperDesc;
