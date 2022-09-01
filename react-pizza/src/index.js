import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'; //это компонент кот хранится в библиотеке redux

import App from './App';

import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Provider store={store}> 
      <App/>
    </Provider>
  </BrowserRouter> 
);
// компонент Provider это компонент кот хранится в библиотеке redux 
// и мы говорим передай в Provider хранилище redux - store, кот мы создали