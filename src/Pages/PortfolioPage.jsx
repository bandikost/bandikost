import React from 'react';
import { useParams } from 'react-router-dom';

const PortfolioPage = () => {
  const { id } = useParams();

  let description;
  switch (id) {
    case '1':
      description = 'Описание проекта 1';
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
      description = 'Описание по умолчанию';
  }

  return (
    <div>
      <h1>Проект {id}</h1>
      <p>{description}</p>
    </div>
  );
};

export default PortfolioPage;