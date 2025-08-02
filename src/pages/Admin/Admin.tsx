import { useState } from "react";
import styles from "./Admin.module.css";

const Admin = () => {
  const [formData, setFormData] = useState({
    title: "",
    city: "",
    description: "",
    text: "",
    author: "Администратор",
  });
  const [deleteId, setDeleteId] = useState("");

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    return date.toLocaleDateString("ru-RU", options);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      data: [
        {
          ...formData,
          id: Date.now(),
          creationDate: formatDate(new Date()),
        },
      ],
    };

    try {
      const response = await fetch(import.meta.env.VITE_API_BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        alert("Статья успешно добавлена!");
        setFormData({
          title: "",
          city: "",
          description: "",
          text: "",
          author: "Администратор",
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Ошибка сервера");
      }
    } catch (error) {
      console.error("Ошибка:", error);
      alert(`Произошла ошибка: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  const handleDelete = async () => {
    if (!deleteId.trim()) {
      alert("Пожалуйста, введите ID статьи");
      return;
    }

    if (!window.confirm(`Вы уверены, что хотите удалить статью с ID ${deleteId}?`)) {
      return;
    }

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/id/${deleteId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Статья успешно удалена!");
        setDeleteId("");
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || "Ошибка сервера");
      }
    } catch (error) {
      console.error("Ошибка:", error);
      alert(`Произошла ошибка: ${error instanceof Error ? error.message : String(error)}`);
    }
  };

  return (
    <div className={styles.adminContainer}>
      <h1>Панель администратора</h1>
      <div className={styles.section}>
        <h2>Добавить новую статью</h2>
        <form onSubmit={handleSubmit} className={styles.articleForm}>
          <div className={styles.formGroup}>
            <label>Заголовок:</label>
            <input
              value={formData.title}
              onChange={e => setFormData({ ...formData, title: e.target.value })}
              placeholder="Введите заголовок"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Город:</label>
            <input
              value={formData.city}
              onChange={e => setFormData({ ...formData, city: e.target.value })}
              placeholder="Введите город"
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label>Краткое описание:</label>
            <textarea
              value={formData.description}
              onChange={e => setFormData({ ...formData, description: e.target.value })}
              placeholder="Введите краткое описание"
              required
              rows={4}
            />
          </div>
          <div className={styles.formGroup}>
            <label>Полный текст:</label>
            <textarea
              value={formData.text}
              onChange={e => setFormData({ ...formData, text: e.target.value })}
              placeholder="Введите полный текст статьи"
              required
              rows={8}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            Опубликовать статью
          </button>
        </form>
      </div>
      <div className={styles.section}>
        <h2>Удалить статью</h2>
        <div className={styles.deleteForm}>
          <div className={styles.formGroup}>
            <label>ID статьи для удаления:</label>
            <input
              type="text"
              value={deleteId}
              onChange={e => setDeleteId(e.target.value)}
              placeholder="Введите ID статьи"
              className={styles.deleteInput}
            />
          </div>
          <button type="button" onClick={handleDelete} className={styles.deleteButton}>
            Удалить статью
          </button>
        </div>
      </div>
    </div>
  );
};

export default Admin;