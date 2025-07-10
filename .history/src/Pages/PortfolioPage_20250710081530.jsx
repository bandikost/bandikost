import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import s from "./modules/Main.module.css";
import Header from "../Components/Header";

const PortfolioPage = () => {
  const { id } = useParams();

  useEffect(() => {
      document.title = `Проектная работа № ${id}`;
  }, [id]);

  let description = "Описание по умолчанию";
  let img = null;
  let link = "#";
  let forwho = "";
  let tematics = "";
  let options = "";
  let cost = "";

  switch (id) {
    case '1':
      description = 'Описание проекта:';
      img = '';
      link = "https://renanao.ru";
      forwho = "Сайт был создан специально для детской аудитории.";
      tematics = "Тематики: Космос, путешествия, загадки, сказки.";
      options = "1️⃣ Разработка страниц по дизайну\n" +
                "2️⃣ Адаптивная верстка (корректное отображение)\n" +
                "3️⃣ Создание базы данных пользователей\n" +
                "4️⃣ Авторизация и регистрация\n" +
                "5️⃣ Подключение контактных форм\n" +
                "6️⃣ SEO-оптимизация (базовая настройка)";
      cost = "💰 40 000 руб. ⏳ Сроки: 14 дней";
      break;

    case '2':
      description = 'Описание проекта 2';
      break;
    case '3':
      description = 'Описание проекта 3';
      break;
    case '4':
      description = 'Описание проекта 4';
      break;
    case '5':
      description = 'Описание проекта 5';
      break;
    case '6':
      description = 'Описание проекта 6';
      break;

      default:
        description = 'Проект не найден';
        img = null;
        link = "#";
        forwho = "";
        tematics = "";
        options = "";
        cost = "";
    }

  return (
    <>
  
      <section className={s.Description}>
        <div className={s.containerWorks}>
          <div className={s.sectionWorks}>
            <div className={s.leftSide}>
              <h2>Проект: {}</h2>
              {img && <img src={img} loading='lazy' alt={`Проект ${id}`} />}
              <p className={s.projectedDis}>
                Ссылка на проект/сайт находится 
                <a href={link} target="_blank" rel="noopener noreferrer"> здесь</a>.
              </p>
            </div>
            <div className={s.rightSide}>
              <p className={s.description}>{description}</p>
              <p className={s.forwho}>{forwho}</p>
              <p className={s.tematics}>{tematics}</p>
              <p className={s.service}>Что входило в услугу:</p>
              <div className={s.options}>
                {options.split("\n").map((line, index) => (
                  <li key={index}>{line}</li>
                ))}
              </div>
              <time className={s.cost}>Стоимость: {cost}</time>
            </div>
          </div>
        </div>
      </section> 
    </>
  );
};

export default PortfolioPage;
