import VacancieItem from "../VacancieItem/VacancieItem";
import styles from "./VacanciesList.module.css";

const vacanciesInfo = [
  {
    id: 0,
    title: "Курьер (Пеший + Вело + Авто)",
    icon: "https://agents.pampadu.ru/api/file/ViewFile?type=1&name=275096a8-a5c4-44e6-bb44-3325ad31aabe.png",
    salary: "до 3 500 ₽/день",
    subtitle: "Яндекс.Еда / Яндекс.Лавка",
    formlink: "https://clck.ru/3NP4XV",
    details: [
      {
        region: "Москва, Санкт-Петербург, Казань",
        salary: "До 3 500 рублей в день",
        schedule: "Комфортное расписание",
        experience: "Не требуется",
        employment: "Самозанятость",
        payments: "Ежедневные",
      },
    ],
    responsibilities: [
      "Доставка заказов из ресторанов и магазинов",
      "Своевременное прибытие по адресам",
      "Взаимодействие с клиентами",
      "Контроль качества доставки",
      "Следование маршруту доставки",
    ],
    requirements: [
      "Телефон на базе Android 7.0 и выше или iPhone",
      "Медицинская книжка (можно оформить после начала работы)",
      "Паспорт или другой документ, удостоверяющий личность",
      "Возраст от 18 лет",
      "Для велокурьеров: наличие велосипеда (партнер предоставляет скидки до 20%)",
    ],
  },
  {
    id: 1,
    title: "Курьер на личном авто",
    icon: "https://clck.ru/3NP9by",
    salary: "от 1 500 ₽/день",
    subtitle: "Лента (доставка товаров)",
    formlink: "https://clck.ru/3NP9fX",
    details: [
      {
        region: "Москва, Санкт-Петербург",
        salary: "От 1 500 рублей в день",
        schedule: "Гибкий, смены от 4 часов",
        experience: "Не требуется",
        employment: "Самозанятость",
        payments: "Еженедельные",
      },
    ],
    responsibilities: [
      "Оставьте отклик на лендинге",
      "Прозвон кандидата оператором",
      "Заполнение карточки кандидата",
      "Выход в смену день в день",
      "Выполнение 36 заказов",
      "Получение вознаграждения",
    ],
    requirements: [
      "Личный автомобиль в исправном состоянии",
      "Водительское удостоверение категории B",
      "Знание русского языка на среднем уровне",
      "Готовность оформить медицинскую книжку",
      "Возраст от 18 до 50 лет",
    ],
  },
  {
    id: 2,
    title: "Повар-кассир",
    icon: "https://agents.pampadu.ru/api/file/ViewFile?type=1&name=ea5baa7b-6356-4627-aa1c-d7b3f42b60ba.png",
    salary: "до 3 400 ₽/день",
    subtitle: "Яндекс Смена (партнер сервиса)",
    formlink: "https://clck.ru/3NPA9R",
    details: [
      {
        region: "Крупные города России",
        salary: "До 3 400 рублей в день",
        schedule: "Смены по выбору (от 4 часов)",
        experience: "Приветствуется в сфере общепита",
        employment: "Самозанятость",
        payments: "Еженедельные",
      },
    ],
    responsibilities: [
      "Скачать приложение Яндекс Смена",
      "Зарегистрироваться через Яндекс ID",
      "Оформить самозанятость (приложение Мой налог)",
      "Загрузить документы в приложение",
      "Выбрать задание и торговую точку",
      "Выполнить задание и получить выплату",
    ],
    requirements: [
      "Обязательно наличие медицинской книжки",
      "Требуется регистрация как самозанятый",
      "Приложение доступно для Android и iOS",
      "Оплата только после прохождения фотоконтроля (проверка документов)",
      "Доступны вакансии повара, кассира, сборщика заказов",
    ],
  },
];

function VacanciesList() {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Актуальные вакансии</h2>
      {vacanciesInfo.map(vacancie => (
        <VacancieItem
          key={vacancie.id}
          title={vacancie.title}
          subtitle={vacancie.subtitle}
          icon={vacancie.icon}
          salary={vacancie.salary}
          formlink={vacancie.formlink}
          details={vacancie.details}
          responsibilities={vacancie.responsibilities}
          requirements={vacancie.requirements}
        />
      ))}
    </div>
  );
}

export default VacanciesList;
