import React from 'react';
// import { connect } from 'react-redux';

// import { sendBookOrder } from '../../actions/book_orders_actions';

// import FormValidator from '../../validators/FormValidator';

class ConferenceRoomBookFormComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return(
      <div className='book-form'>
        <h2>Бронирование конференц-зала</h2>
        <form onSubmit={ this.handleSubmit }>
          { this.renderOrganizationName() }
          { this.renderDatePickers() }
          { this.renderAccommodationSelectors() }
          { this.renderContactInfoInputs() }
          { this.renderSubmitButton() }
        </form>
      </div>
    );
  }

  renderOrganizationName() {
    return(
      <div>
        <div>
          <label htmlFor='organization-name'>Название организации</label>
          <input id='organization-name'/>
        </div>
        <div>
          <label htmlFor='organizer-name'>Ф.И.О. организатора</label>
          <input id='organizer-name'/>
        </div>
      </div>
    )
  }

  renderDatePickers() {
    return(
      <div>
        <div>
          <label htmlFor='holding-date'>Дата проведения мероприятия</label>
          <input id='holding-date' type='date'/>
        </div>
        <div>
          <label htmlFor='holding-time'>Время начала мероприятия</label>
          <select id='holding-time'>
            <option defaultValue>12:00</option>
            <option>13:00</option>
          </select>
        </div>
      </div>
    )
  }

  renderAccommodationSelectors() {
    return(
      <div>
        <div>
          <label htmlFor='person-count'>Количество человек</label>
          <input id='person-count'/>
        </div>
        <div>
          <label htmlFor='room-schema'>Расстановка мебели</label>
          <select id='room-schema'>
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

  renderSubmitButton() {
    return(<div><input type='submit' value='Отправить завку'/></div>)
  }

  handleSubmit(event) {
    event.preventDefault();

    const csrf = document.querySelector('[name=csrf-token]').content;
    this.props.sendBookOrder({ csrf });
  }
}

// const mapStateToProps = (state) => {
//   return { reviews: state.bookOrdersReducer.reviews };
// };
//
// const mapDispatchToProps = {
//   sendBookOrder
// };

// export default connect(mapStateToProps, mapDispatchToProps)(RoomBookFormComponent);
export default ConferenceRoomBookFormComponent;