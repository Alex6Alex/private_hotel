import React from 'react'
import { Link } from 'react-router-dom';

export default class RoomsComponent extends React.Component {
  constructor(props) {
    super(props);

    this.rooms = [
      {
        name: 'Стандарт двухместный',
        image: 'images/Hotel1.jpg'
      },
      {
        name: 'Стандарт трехместный',
        image: 'images/Hotel2.jpg'
      },
      {
        name: 'Люкс двухместный',
        image: 'images/Hotel3.jpg'
      },
      {
        name: 'Люкс трехместный',
        image: 'images/Hotel4.jpg'
      }
    ];
  }

  componentDidMount() {
    document.title = 'Номера | Гостевой дом «Авия»'
  }

  render() {
    return(
      <div className='rooms-page'>
        <div className='short-description'>
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
        { this.rooms.map((room, index) => this.renderRoom(index, room)) }
      </div>
    )
  }

  renderRoom(roomIndex, room) {
    return(
      <div key={ roomIndex } className='room'>
        <div className='room-image'>
          <img src={ room.image } alt='room photo'/>
        </div>
        <Link className='room-name' to='room'>{ room.name }</Link>
        <div className='room-description'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <p>Aperiam asperiores cum eligendi explicabo harum impedit incidunt ipsa, maiores minus, molestiae nam odit porro provident, quaerat quam quas rerum sequi totam.</p>
          <p>Цена за сутки: 1000 <i className='fa fa-rub' aria-hidden='true'/></p>
        </div>
        <a href='/' className='link-button'>Забронировать</a>
      </div>
    )
  }
}