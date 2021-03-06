import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchRooms } from '../../actions/rooms_actions';

class RoomsComponent extends React.Component {
  componentDidMount() {
    document.title = 'Номера | Гостевой дом';

    this.props.fetchRooms();
  }

  render() {
    return(
      <div className='rooms-page'>
        <div className='page-description'>
          <h2>Номера и цены</h2>
          <p>
            В распоряжении гостей мини-отеля «Авия» двухместные и трехместный номера.
            Все номера оснащены холодильником, телевизором, тумбочкой,
            письменным столом и зеркалом.
            К услугам гостей бесплатный wi-fi в каждом номере.
            В ванных комнатах — современная сантехника,
            фен и необходимые туалетные принадлежности. По запросу
            предоставляются: зубная паста, щетка, расческа, бритвенный набор.
            Окна и двери выходят во двор на первом этаже, и на общий балкон - на втором.
          </p>
        </div>
        { this.renderRooms() }
      </div>
    )
  }

  renderRooms() {
    return(
      <div className='rooms'>
        { this.props.rooms.map((room) => this.renderRoom(room)) }
      </div>
    )
  }

  renderRoom(room) {
    const roomImages = room.hotel_room_images || [];
    const imageLink = roomImages[0] ? roomImages[0].image_link : null;

    return(
      <div key={ room.id } className='room'>
        <div className='room-image'>
          <img src={ imageLink } alt='room photo'/>
        </div>
        <Link className='room-name' to={ `/rooms/${room.id}` }>{ room.name }</Link>
        <div className='room-description'>
          {
            room.description.split("\n").map((paragraph, index) =>
              <p key={ index }>{ paragraph }</p>
            )
          }
          <p>Цена за сутки: { room.day_price } { room.currency }</p>
        </div>
        <Link className='link-button' to={ `/rooms/${room.id}` }>Забронировать</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { rooms: state.hotelRoomsReducer.rooms };
};

const mapDispatchToProps = {
  fetchRooms
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomsComponent);