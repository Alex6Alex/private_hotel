import React from 'react'
import SliderComponent from "../home_page/SliderComponent";
import { connect } from 'react-redux';

import { fetchRoom } from '../../actions/rooms_actions';

class RoomComponent extends React.Component {
  componentDidMount() {
    document.title = 'Номер | Гостевой дом «Авия»';

    const { fetchRoom, roomId } = this.props;
    fetchRoom(roomId);
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
        <h2>{ this.props.room.name }</h2>
        {
          this.props.room.description.split("\n").map((paragraph, index) =>
            <p key={ index }>{ paragraph }</p>
          )
        }
      </div>
    )
  }

  renderShortRoomInformation() {
    return(
      <div className='room-short-info'>
        <h3>Информация о номере</h3>
        <div className='information'>
          <p className='information-title'>Вместимость номера</p>
          <p>{ this.props.room.person_capacity } человека</p>
          <p className='information-title'>Площадь номера</p>
          <p>{ this.props.room.room_area } m2</p>
          <p className='information-title'>Количество номеров</p>
          <p>{ this.props.room.count_of_rooms }</p>
          <p className='information-title'>Стоимость за сутки</p>
          <p>{ this.props.room.day_price } { this.props.room.currency }</p>
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

const mapStateToProps = (state, ownProps) => {
  return { room: state.hotelRoomsReducer.room, roomId: ownProps.roomId };
};

const mapDispatchToProps = {
  fetchRoom
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomComponent);
