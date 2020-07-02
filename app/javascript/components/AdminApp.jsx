import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import {Provider} from 'react-redux';

import * as Components from './admin/index';
import configureStore from '../stores/adminStore';

export default class extends React.Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <BrowserRouter>
            <Switch>
              <Route exact path='/admin/login'
                     component={Components.AuthenticationComponent}/>
              <Components.AdminAuthentication>
                <Components.HeaderComponent/>
              <Route exact path='/admin'
                     component={Components.HomePageComponent}/>
              <Route exact path='/admin/news' render={() => {
                return (
                  <Components.ItemListComponent
                    title='Список новостей'
                    url='/admin/posts'
                    createNewUrl='/admin/new-post'
                    editUrl='/admin/edit-post'
                  />)
              }}/>
              <Route exact path='/admin/new-post'
                     component={Components.PostEditorComponent}/>
              <Route path='/admin/edit-post/:id' render={
                ({match}) => {
                  const {id} = match.params;
                  return <Components.PostEditorComponent postId={id}/>
                }}
              />
              <Route exact path='/admin/rooms' render={() => {
                return (
                  <Components.ItemListComponent
                    title='Список номеров'
                    url='/admin/hotel_rooms'
                    createNewUrl='/admin/new-room'
                    editUrl='/admin/edit-room'
                  />)
              }}/>
              <Route exact path='/admin/new-room'
                     component={Components.RoomEditorComponent}/>
              <Route path='/admin/edit-room/:id' render={
                ({match}) => {
                  const {id} = match.params;
                  return <Components.RoomEditorComponent roomId={id}/>
                }}
              />
                <Route exact path='/admin/conference-rooms' render={() => {
                  return (
                    <Components.ItemListComponent
                      title='Список конференц-залов'
                      url='/admin/conference_rooms'
                      createNewUrl='/admin/new-conference-room'
                      editUrl='/admin/edit-conference-room'
                    />)
                }}/>
                <Route exact path='/admin/new-conference-room'
                       component={Components.ConferenceRoomEditorComponent}/>
                <Route path='/admin/edit-conference-room/:id' render={
                  ({match}) => {
                    const {id} = match.params;
                    return(<Components.ConferenceRoomEditorComponent
                      conferenceRoomId={id}/>)
                  }}
                />
              <Route exact path='/admin/services-list' render={() => {
                return (
                  <Components.ItemListComponent
                    title='Список сервисов'
                    url='/admin/services'
                    createNewUrl='/admin/new-service'
                    editUrl='/admin/edit-service'
                  />)
              }}/>
              <Route exact path='/admin/new-service'
                     component={Components.ServiceEditorComponent}/>
              <Route path='/admin/edit-service/:id' render={
                ({match}) => {
                  const {id} = match.params;
                  return <Components.ServiceEditorComponent serviceId={id}/>
                }}
              />
              <Route exact path='/admin/special-offers-list' render={() => {
                return (
                  <Components.ItemListComponent
                    title='Список спецпредложений'
                    url='/admin/special_offers'
                    createNewUrl='/admin/new-special-offer'
                    editUrl='/admin/edit-special-offer'
                  />)
              }}/>
              <Route exact path='/admin/new-special-offer'
                     component={Components.SpecialOfferEditorComponent}/>
              <Route path='/admin/edit-special-offer/:id' render={
                ({match}) => {
                  const {id} = match.params;
                  return <Components.SpecialOfferEditorComponent
                    specialOfferId={id}/>
                }}
              />
              <Route exact path='/admin/page-descriptions' render={() => {
                return (
                  <Components.ItemListComponent
                    title='Список описаний страниц'
                    url='/admin/description_texts'
                    createNewUrl='/admin/new-page-description'
                    editUrl='/admin/edit-page-description'
                  />)
              }}/>
              <Route exact path='/admin/new-page-description'
                     component={Components.DescriptionEditorComponent}/>
              <Route path='/admin/edit-page-description/:id' render={
                ({match}) => {
                  const {id} = match.params;
                  return <Components.DescriptionEditorComponent
                    descriptionId={id}/>
                }}
              />
              <Route exact path='/admin/reviews-list'
                     component={Components.ReviewsComponent}/>
              <Route exact path='/admin/photos'
                     component={Components.PhotosEditorComponent}/>
              </Components.AdminAuthentication>

            </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
