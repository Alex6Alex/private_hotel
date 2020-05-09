import React from 'react';

import withSlider from '../hoc/withSlider';
import withRoomBookForm from '../hoc/withRoomBookForm';

import { connect } from 'react-redux';

import { fetchRoom } from '../../actions/rooms_actions';

class RoomComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { showBookForm: false };
    this.handleBookButtonClick = this.handleBookButtonClick.bind(this);
  }

  componentDidMount() {
    document.title = 'Номер | Гостевой дом «Авия»';

    const { fetchRoom, roomId } = this.props;
    fetchRoom(roomId);
  }

  render() {
    return(
      <div className='room'>
        { this.props.sliderComponent }
        { this.renderRoomDescription() }
        { this.renderShortRoomInformation() }
        { this.renderRoomServices() }
        <div className='book-button'>
          <div className='link-button' onClick={ this.handleBookButtonClick }>Забронировать</div>
        </div>
        { this.state.showBookForm && this.props.bookFormComponent }
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

  handleBookButtonClick() {
    this.setState({ showBookForm: true });
    // this.props.bookFormComponent.scrollIntoForm();
  }
}

const mapStateToProps = (state, ownProps) => {
  return { room: state.hotelRoomsReducer.room, roomId: ownProps.roomId };
};

const mapDispatchToProps = { fetchRoom };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSlider(withRoomBookForm(RoomComponent), false));
