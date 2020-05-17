import React from 'react';
import { connect } from 'react-redux';

import { sendBookOrder } from '../../actions/book_orders_actions';

import FormValidator from '../../validators/FormValidator';

class RoomBookFormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      roomId: props.room.id,
      roomName: props.room.name,
      dateIn: '',
      dateOut: '',
      guestsWithPlace: 1,
      guestsWithoutPlace: 1,
      email: '',
      phone: '',
      timeIn: '12:00',
      personCapacity: props.room.person_capacity
    };

    this.handleInputChange = this.handleInputChange.bind(this);
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
          <input readOnly required name='roomName' value={ this.state.roomName }/>
        </div>
      </div>
    )
  }

  renderDatePickers() {
    return(
      <div>
        <div>
          <label htmlFor='date-in'>Дата заезда</label>
          <input id='date-in' type='date' required value={ this.state.dateIn }
                 name= 'dateIn' onChange={ this.handleInputChange }/>
        </div>
        <div>
          <label htmlFor='date-out'>Дата выезда</label>
          <input id='date-out' type='date' required value={ this.state.dateOut }
                 name='dateOut' onChange={ this.handleInputChange }/>
        </div>
      </div>
    )
  }

  renderAccommodationSelectors() {
    let allowedOptions = [];
    for (let i = 0; i < this.state.personCapacity; i++) {
      allowedOptions.push(<option key={ i }>{ i + 1 }</option>)
    }

    return(
      <div>
        <div>
          <label htmlFor='accommodation-with-place'>Размещение в номере</label>
          <select id='accommodation-with-place' name='guestsWithPlace'
                  value={ this.state.guestsWithPlace } onChange={ this.handleInputChange }>
            { allowedOptions }
          </select>
        </div>
        <div>
          <label htmlFor='accommodation-without-place'>Размещение без отдельного места</label>
          <select id='accommodation-without-place' name='guestsWithoutPlace'
                  value={ this.state.guestsWithoutPlace } onChange={ this.handleInputChange }>
            { allowedOptions }
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
          <input id='email' type='email' required value={ this.state.email }
                 name='email' onChange={ this.handleInputChange }/>
        </div>
        <div>
          <label htmlFor='phone'>Номер телефона</label>
          <input id='phone' type='phone' required value={ this.state.phone }
                 name='phone' onChange={ this.handleInputChange }/>
        </div>
      </div>
    )
  }

  renderTimeSelectors() {
    return(
      <div>
        <div>
          <label htmlFor='time-in'>Время заезда</label>
          <select id='time-in' name='timeIn' value={ this.state.timeIn }
                  onChange={ this.handleInputChange }>
            <option defaultValue>12:00</option>
            <option>13:00</option>
          </select>
        </div>
        <div>
          <label>Время выезда</label>
          <input readOnly required value='12:00'/>
        </div>
      </div>
    )
  }

  renderExtraServicesSelector() {
    return(
      <div>
        <div>
          <label htmlFor='extra-service-picker'>Дополнительные услуги</label>
          <select multiple id='extra-service-picker'>
            <option>Трансфер</option>
          </select>
        </div>
      </div>
    )
  }

  renderSubmitButton() {
    return(<div><input type='submit' value='Отправить завку'/></div>)
  }

  handleInputChange(event) {
    const target = event.target;
    this.setState({ [target.name]: target.value });
  }

  handleSubmit(event) {
    event.preventDefault();

    const {
      roomId, dateIn, dateOut, guestsWithPlace, guestsWithoutPlace, email, phone, timeIn
    } = this.state;

    const csrf = document.querySelector('[name=csrf-token]').content;
    this.props.sendBookOrder({
      csrf,
      roomId,
      dateIn,
      dateOut,
      guestsWithPlace,
      guestsWithoutPlace,
      email,
      phone,
      timeIn
    });
  }
}

const mapStateToProps = (state) => {
  return { sentBookOrder: state.bookOrdersReducer.sentBookOrder };
};

const mapDispatchToProps = {
  sendBookOrder
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomBookFormComponent);
