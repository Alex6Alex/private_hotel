import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { Provider } from 'react-redux';

import * as Components from './admin/index';
import configureStore from '../stores/adminStore';

export default class extends React.Component {
  render() {
    return (
      <Provider store={ configureStore() }>
        <Components.AdminAuthentication>
          <BrowserRouter>
            <Components.HeaderComponent />
            <Switch>
              <Route exact path='/admin/login' component={ Components.AuthenticationComponent } />
              <Route exact path='/admin' component={ Components.HomePageComponent } />
            </Switch>
          </BrowserRouter>
        </Components.AdminAuthentication>
      </Provider>
    );
  }
}

// Новости, Услуги, Отзывы гостей,
// Номера(Классы номеров, Номера),
// Питание (Категории блюд, блюда),
// Страницы (текст главной страницы, страниц раздела Отель), Фото,
// Заявки на бронирование.