import { useEffect, useState } from "react";
import PaperItem from "../PaperItem/PaperItem";
import styles from "./PaperList.module.css";
import type { IPaper } from "../PaperItem/types";

function PaperList() {
  const [paperData, setPaperData] = useState<IPaper[]>([]);

  useEffect(() => {
    async function fetchPapers() {
      const response = await fetch("https://sheetdb.io/api/v1/9rfiyei9q87ih");
      
      if (!response.ok) {
        throw new Error("Ошибка запроса!");
      }

      const data = await response.json();
      setPaperData(data);
    }

    fetchPapers();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Полезные статьи о работе в России</h2>
      <div className={styles.content}>
        {paperData.map(paper => (
          <PaperItem
            key={paper.id}
            id={paper.id}
            title={paper.title}
            city={paper.city}
            description={paper.description}
          />
        ))}
      </div>
    </div>
  );
}

export default PaperList;