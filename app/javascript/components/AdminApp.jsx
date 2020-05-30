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
              <Route exact path='/admin/news' render={ () => {
                return(
                  <Components.ItemListComponent
                    title='Список новостей'
                    url='/admin/posts'
                    createNewUrl='/admin/new-post'
                    editUrl='/admin/edit-post'
                  />)
              }} />
              <Route exact path='/admin/new-post' component={ Components.PostEditorComponent } />
              <Route path='/admin/edit-post/:id' render={
                ({ match }) => {
                  const { id } = match.params;
                  return <Components.PostEditorComponent postId={ id } />
                }}
              />
              <Route exact path='/admin/rooms' render={ () => {
                return(
                  <Components.ItemListComponent
                    title='Список номеров'
                    url='/admin/hotel_rooms'
                    createNewUrl='/admin/new-room'
                    editUrl='/admin/edit-room'
                  />)
              }} />
              <Route exact path='/admin/new-room' component={ Components.RoomEditorComponent } />
              <Route path='/admin/edit-room/:id' render={
                ({ match }) => {
                  const { id } = match.params;
                  return <Components.RoomEditorComponent roomId={ id } />
                }}
              />
              <Route exact path='/admin/services-list' render={ () => {
                return(
                  <Components.ItemListComponent
                    title='Список сервисов'
                    url='/admin/services'
                    createNewUrl='/admin/new-service'
                    editUrl='/admin/edit-service'
                  />)
              }} />
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