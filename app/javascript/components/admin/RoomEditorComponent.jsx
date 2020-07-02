import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import TinyMceEditorComponent from './TinyMceEditorComponent';

import { fetchItem, sendItem } from '../../actions/admin/entities_actions';

class RoomEditorComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      day_price: '',
      currency: '',
      person_capacity: '',
      room_area: '',
      count_of_rooms: '',
      isInitialState: true
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.title = 'Редактирование номера';

    const { roomId } = this.props;
    if (roomId) this.props.fetchItem('/admin/hotel_rooms', roomId);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.roomId && prevState.isInitialState) {
      this.setState({
        name: this.props.selectedEntity.name,
        description: this.props.selectedEntity.description,
        day_price: this.props.selectedEntity.day_price,
        currency: this.props.selectedEntity.currency,
        person_capacity: this.props.selectedEntity.person_capacity,
        room_area: this.props.selectedEntity.room_area,
        count_of_rooms: this.props.selectedEntity.count_of_rooms,
        isInitialState: false
      })
    }
  }

  render() {
    if (this.props.shouldRedirectToList) return(<Redirect to='/admin/rooms'/>);

    return(
      <div className='edit-page'>
        <div className='page-description'>
          <h2>Редактирование номера</h2>
        </div>
        <div className='edit-form'>
          <form onSubmit={ this.handleSubmit }>
            <label htmlFor='name'>Название</label>
            <input name='name' id='name' value={ this.state.name }
                   required onChange={ this.handleInputChange }
                   minLength={5} maxLength={100}/>
            <label htmlFor='editor'>Описание номера</label>
            <TinyMceEditorComponent
              format='text'
              value={ this.state.description }
              onEditorChange={ this.handleEditorChange }/>
            <label htmlFor='day_price'>Стоимость номера за сутки</label>
            <input name='day_price' id='day_price' value={ this.state.day_price }
                   required onChange={ this.handleInputChange }/>
            <label htmlFor='currency'>Валюта</label>
            <input name='currency' id='currency' value={ this.state.currency }
                   required onChange={ this.handleInputChange }
                   minLength={2} maxLength={3}/>
            <label htmlFor='person_capacity'>Вместимость номера</label>
            <input name='person_capacity' id='person_capacity'
                   value={ this.state.person_capacity } required
                   onChange={ this.handleInputChange } pattern='\d{1,2}'/>
            <label htmlFor='room_area'>Площадь номера</label>
            <input name='room_area' id='room_area' value={ this.state.room_area }
                   required onChange={ this.handleInputChange }/>
            <label htmlFor='count_of_rooms'>Количество номеров данного типа</label>
            <input name='count_of_rooms' id='count_of_rooms'
                   value={ this.state.count_of_rooms } required
                   onChange={ this.handleInputChange } pattern='\d{1,2}'/>
            <input type='submit' value='Сохранить'/>
          </form>
        </div>
      </div>
    )
  }

  handleInputChange(event) {
    const target = event.target;
    this.setState({ [target.name]: target.value });
  }

  handleEditorChange(description, editor) {
    this.setState({ description });
  }

  handleSubmit(event) {
    event.preventDefault();

    const {
      name,
      description,
      day_price,
      currency,
      person_capacity,
      room_area,
      count_of_rooms
    } = this.state;

    const csrf = document.querySelector('[name=csrf-token]').content;
    this.props.sendItem('/admin/hotel_rooms', csrf, {
      id: this.props.roomId,
      name,
      description,
      day_price,
      currency,
      person_capacity,
      room_area,
      count_of_rooms
    });
  }
}

const mapStateToProps = (state) => {
  return {
    selectedEntity: state.entitiesReducer.selectedEntity,
    shouldRedirectToList: state.entitiesReducer.shouldRedirectToList
  };
};

const mapDispatchToProps = {
  fetchItem, sendItem
};

export default connect(mapStateToProps, mapDispatchToProps)(RoomEditorComponent);
