import React from 'react';
import { connect } from 'react-redux';

import { sendBookOrder } from '../../actions/book_orders_actions';

import FormValidator from '../../validators/FormValidator';

class RoomBookFormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return(
      <div className='book-form'>
        <h2>Бронирование номера</h2>
        <form onSubmit={ this.handleSubmit }>
          { this.renderRoomName() }
          { this.renderDatePickers() }
          { this.renderAccommodationSelectors() }
          { this.renderContactInfoInputs() }
          { this.renderTimeSelectors() }
          { this.renderExtraServicesSelector() }
          { this.renderSubmitButton() }
        </form>
      </div>
    );
  }

  renderRoomName() {
    return(
      <div>
        <div>
          <label htmlFor='room-name'>Номер</label>
          <select id='room-name'>
            <option defaultValue>Стандарт 2-ухместный</option>
            <option>Стандарт 3-ухместный</option>
          </select>
        </div>
      </div>
    )
  }

  renderDatePickers() {
    return(
      <div>
        <div>
          <label htmlFor='date-in'>Дата заезда</label>
          <input id='date-in' type='date'/>
        </div>
        <div>
          <label htmlFor='date-out'>Дата выезда</label>
          <input id='date-out' type='date'/>
        </div>
      </div>
    )
  }

  renderAccommodationSelectors() {
    return(
      <div>
        <div>
          <label htmlFor='accommodation-with-place'>Размещение в номере</label>
          <select id='accommodation-with-place'>
            <option defaultValue>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
        <div>
          <label htmlFor='accommodation-without-place'>Размещение без отдельного места</label>
          <select id='accommodation-without-place'>
            <option defaultValue>1</option>
            <option>2</option>
            <option>3</option>
          </select>
        </div>
      </div>
    )
  }

  renderContactInfoInputs() {
    return(
      <div>
        <div>
          <label htmlFor='email'>Электронная почта</label>
          <input id='email' type='email'/>
        </div>
        <div>
          <label htmlFor='phone'>Номер телефона</label>
          <input id='phone' type='phone'/>
        </div>
      </div>
    )
  }

  renderTimeSelectors() {
    return(
      <div>
        <div>
          <label htmlFor='time-in'>Время заезда</label>
          <select id='time-in'>
            <option defaultValue>12:00</option>
            <option>13:00</option>
          </select>
        </div>
        <div>
          <label>Время выезда</label>
          <label>12:00</label>
        </div>
      </div>
    )
  }

  renderExtraServicesSelector() {
    return(
      <div>
        <div>
          <label htmlFor='extra-service-picker'>Дополнительные услуги</label>
          <select id='extra-service-picker'>
            <option>Трансфер</option>
          </select>
        </div>
      </div>
    )
  }

  renderSubmitButton() {
    return(<div><input type='submit' value='Отправить завку'/></div>)
  }

  handleSubmit(event) {
    event.preventDefault();

    const csrf = document.querySelector('[name=csrf-token]').content;
    this.props.sendBookOrder({ csrf });
  }
}

const mapStateToProps = (state) => {
  return { reviews: state.bookOrdersReducer.reviews };
};

const mapDispatchToProps = {
  sendBookOrder
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomBookFormComponent);
