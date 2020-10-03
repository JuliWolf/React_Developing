import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import ProductsProvider from './context/products-context';

ReactDOM.render(
  <ProductsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsProvider>,
  document.getElementById('root')
);

// UseContext используется для тех действий, которые выполняются не частно
// Так как useContext не имеет возможности определять какой компонент и где обновить
// При изменении данных, каждый компонент, подписанных на события из useContext будет обновлен
// Что приведет к уменьшению скорости загрузки
// Подходит для смены тем/авторизации
