import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import * as Components from './hotel/index';
import configureStore from '../stores/hotelStore';

export default class extends React.Component {
  render() {
    return (
      <Provider store={ configureStore() }>
        <BrowserRouter forceRefresh={true}>
          <Components.HeaderComponent />
            <Switch>
              <Route exact path='/' component={ Components.HomePageComponent } />
              <Route exact path='/about' component={ Components.AboutHotelComponent } />
              <Route exact path='/reviews' component={ Components.ReviewsComponent } />
              <Route exact path='/services' component={ Components.ServicesComponent } />
              <Route exact path='/rooms' component={ Components.RoomsComponent } />
              <Route path='/rooms/:id' render={
                ({ match }) => {
                  const { id } = match.params;
                  return <Components.RoomComponent roomId={ id }/>
                }}
              />
              <Route exact path='/contacts' component={ Components.ContactsComponent } />
              <Route exact path='/conference-room' component={ Components.ConferenceRoomComponent } />
              <Route exact path='/special-offers' component={ Components.SpecialOffersComponent } />
              <Route path='/special-offers/:id' render={
                ({ match }) => {
                  const { id } = match.params;
                  return <Components.Article
                    title='Спецпредложение'
                    url='/hotel/special-offers'
                    elementId={ id }/>
                }}
              />
              <Route path='/news/:id' render={
                ({ match }) => {
                  const { id } = match.params;
                  return <Components.Article
                    title='Новость'
                    url='/hotel/news'
                    elementId={ id }/>
                }}
              />
              <Route path='*' component={ Components.NotFoundComponent } />
            </Switch>
          <Components.FooterComponent />
        </BrowserRouter>
      </Provider>
    );
  }
}
