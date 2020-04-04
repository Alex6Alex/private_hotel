import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import HeaderComponent from './header/HeaderComponent';
import FooterComponent from './footer/FooterComponent';

import HomePageComponent from './home_page/HomePageComponent';
import ServicesComponent from "./services/ServicesComponent";
import RoomsComponent from "./rooms/RoomsComponent";

import configureStore from '../configureStore';

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <HeaderComponent />
          <Switch>
            <Route exact path='/' render={ () => <HomePageComponent /> } />
            <Route exact path='/services' render={ () => <ServicesComponent /> } />
            <Route exact path='/rooms' render={ () => <RoomsComponent /> } />
          </Switch>
          <FooterComponent />
        </BrowserRouter>
      </Provider>
    );
  }
}
