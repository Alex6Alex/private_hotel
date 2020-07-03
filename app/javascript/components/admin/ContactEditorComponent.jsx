import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchItem, sendItem } from '../../actions/admin/entities_actions';

class ContactEditorComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      phone: '',
      email: '',
      isInitialState: true
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.title = 'Редактирование контакта';

    const { contactId } = this.props;
    if (contactId) this.props.fetchItem('/admin/contacts', contactId);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.contactId && prevState.isInitialState) {
      this.setState({
        name: this.props.selectedEntity.name,
        phone: this.props.selectedEntity.phone,
        email: this.props.selectedEntity.email,
        isInitialState: false
      })
    }
  }

  render() {
    if (this.props.shouldRedirectToList) return(<Redirect to='/admin/hotel-contacts'/>);

    return(
      <div className='edit-page'>
        <div className='page-description'>
          <h2>Редактирование контакта</h2>
        </div>
        <div className='edit-form'>
          <form onSubmit={ this.handleSubmit }>
            <label htmlFor='name'>Название</label>
            <input name='name' id='name' value={ this.state.name }
                   required onChange={ this.handleInputChange }
                   minLength={3} maxLength={100}/>
            <label htmlFor='phone'>Телефон</label>
            <input name='phone' id='phone'
                   value={ this.state.phone } required
                   onChange={ this.handleInputChange } />
            <label htmlFor='email'>Электронная почта</label>
            <input name='email' id='email' type='email' required
                   onChange={ this.handleInputChange } value={ this.state.email }/>
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

  handleSubmit(event) {
    event.preventDefault();

    const { name, phone, email } = this.state;

    const csrf = document.querySelector('[name=csrf-token]').content;
    this.props.sendItem('/admin/contacts', csrf, {
      id: this.props.contactId, name, phone, email
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

export default connect(mapStateToProps, mapDispatchToProps)(ContactEditorComponent);
