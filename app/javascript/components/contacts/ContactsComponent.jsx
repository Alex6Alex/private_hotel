import React from 'react'
import YandexMapComponent from "../home_page/YandexMapComponent";

export default class ContactsComponent extends React.Component {
  componentDidMount() {
    document.title = 'Контакты | Гостевой дом «Авия»'
  }

  render() {
    return(
      <div className='contacts-page'>
        <div className='short-description'>
          <h2>Контакты</h2>
        </div>
        <div className='contacts-block'>
          { this.renderMap() }
          { this.renderContacts() }
        </div>
      </div>
    )
  }

  renderMap() {
    return(
      <YandexMapComponent
        id='yandex-map'
        options={{
          center: [44.573087, 33.498725],
          zoom: 12
        }}
        onMapLoad={ map => {
          let placeMark = new window.ymaps.GeoObject({
            geometry: { type: 'Point', coordinates: [44.573087, 33.498725] }
          });
          map.geoObjects.add(placeMark);
          map.behaviors.disable('scrollZoom');
        }}
      />
    )
  }

  renderContacts() {
    return(
      <div className='contacts-data'>
        <div className='address-info'>
          <h3>Адрес</h3>
          <p>г. Севастополь, ул. Название, 2</p>
        </div>
        <div className='department-info'>
          <h3>Бронирование номеров</h3>
          <p>Телефон: +7(978)123-45-67</p>
          <p>Эл. адрес: some_email@mail.com</p>
        </div>
        <div className='department-info'>
          <h3>Организация конференций</h3>
          <p>Телефон: +7(978)123-45-67</p>
          <p>Эл. адрес: some_email@mail.com</p>
        </div>
        <div className='department-info'>
          <h3>Кафе</h3>
          <p>Телефон: +7(978)123-45-67</p>
          <p>Эл. адрес: some_email@mail.com</p>
        </div>
      </div>
    )
  }
}
