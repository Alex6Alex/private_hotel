import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import HeaderComponent from './header/HeaderComponent';
import FooterComponent from './footer/FooterComponent';

import HomePageComponent from './home_page/HomePageComponent';
import AboutHotelComponent from './about_hotel/AboutHotelComponent';
import ReviewsComponent from "./reviews/ReviewsComponent";
import ServicesComponent from './services/ServicesComponent';
import RoomsComponent from './rooms/RoomsComponent';
import ContactsComponent from './contacts/ContactsComponent';
import SpecialOffersComponent from './special_offers/SpecialOffersComponent';

import RoomComponent from './room/RoomComponent';
import configureStore from '../configureStore';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ configureStore() }>
        <BrowserRouter>
          <HeaderComponent />
          <Switch>
            <Route exact path='/' component={ HomePageComponent } />
            <Route exact path='/about' component={ AboutHotelComponent } />
            <Route exact path='/reviews' component={ ReviewsComponent } />
            <Route exact path='/services' component={ ServicesComponent } />
            <Route exact path='/rooms' component={ RoomsComponent } />
            <Route path='/rooms/:id' render={
              ({ match }) => {
                const { id } = match.params;
                return <RoomComponent roomId={ id }/>
              }}
            />
            <Route exact path='/contacts' component={ ContactsComponent } />
            <Route exact path='/special_offers' component={ SpecialOffersComponent } />
          </Switch>
          <FooterComponent />
        </BrowserRouter>
      </Provider>
    );
  }
}
