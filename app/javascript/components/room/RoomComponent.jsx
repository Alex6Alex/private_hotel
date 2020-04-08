import React from 'react'
import SliderComponent from "../home_page/SliderComponent";

export default class RoomComponent extends React.Component {
  componentDidMount() {
    document.title = 'Номер | Гостевой дом «Авия»'
  }

  render() {
    return(
      <div className='room'>
        <SliderComponent/>
        { this.renderRoomDescription() }
        { this.renderShortRoomInformation() }
        { this.renderRoomServices() }
        <div className='book-button'>
          <a href='/' className='link-button'>Забронировать</a>
        </div>
      </div>
    )
  }

  renderRoomDescription() {
    return(
      <div className='room-description'>
        <h2>Стандарт двухместный</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
        <p>Aspernatur aut consequuntur delectus eum harum in ipsa ipsam, ipsum, minima modi natus nisi nobis perferendis perspiciatis quae recusandae similique sit totam!</p>
      </div>
    )
  }

  renderShortRoomInformation() {
    return(
      <div className='room-short-info'>
        <h3>Информация о номере</h3>
        <div className='information'>
          <p className='information-title'>Вместимость номера</p><p>3 человека</p>
          <p className='information-title'>Площадь номера</p><p>18 m2</p>
          <p className='information-title'>Количество номеров</p><p>5</p>
          <p className='information-title'>Стоимость за сутки</p><p>1000 RUB</p>
        </div>
      </div>
    )
  }

  renderRoomServices() {
    return(
      <div className='room-services'>
        <h3>Доступные услуги в номере</h3>
        <div className='services'>
          <p>Wi-Fi интернет</p><p>Холодильник</p>
          <p>Кабельное телевидиние</p><p>Телефон с международным доступом</p>
          <p>Кондиционер</p><p>Электронный замок</p>
          <p>Сейф</p><p>Чайный набор</p>
        </div>
      </div>
    )
  }
}