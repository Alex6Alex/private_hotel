import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import TinyMceEditorComponent from './TinyMceEditorComponent';

import { fetchItem, sendItem, hideMessage } from '../../actions/admin/entities_actions';

class ConferenceRoomEditorComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      description: '',
      person_capacity: '',
      plan_image: '',
      isInitialState: true
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFileInputChange = this.handleFileInputChange.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.title = 'Редактирование конференц-зала';

    const { conferenceRoomId } = this.props;
    if (conferenceRoomId) this.props.fetchItem('/admin/conference_rooms', conferenceRoomId);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.conferenceRoomId && prevState.isInitialState) {
      this.setState({
        name: this.props.selectedEntity.name,
        description: this.props.selectedEntity.description,
        person_capacity: this.props.selectedEntity.person_capacity,
        isInitialState: false
      })
    }
  }

  render() {
    if (this.props.shouldRedirectToList) return(<Redirect to='/admin/conference-rooms'/>);

    return(
      <div className='edit-page'>
        <div className='page-description'>
          <h2>Редактирование конференц-зала</h2>
        </div>
        <div className='edit-form'>
          <form onSubmit={ this.handleSubmit }>
            <label htmlFor='name'>Название</label>
            <input name='name' id='name' value={ this.state.name }
                   required onChange={ this.handleInputChange }
                   minLength={5} maxLength={100}/>
            <label htmlFor='editor'>Описание зала</label>
            <TinyMceEditorComponent
              format='text'
              value={ this.state.description }
              onEditorChange={ this.handleEditorChange }/>
            <label htmlFor='person_capacity'>Вместимость зала</label>
            <input name='person_capacity' id='person_capacity'
                   value={ this.state.person_capacity } required
                   onChange={ this.handleInputChange } pattern='\d{1,2}'/>
            <label htmlFor='plan_image'>Схема зала</label>
            <input name='plan_image' id='plan_image' type='file'
                   onChange={ this.handleFileInputChange }/>
            <input type='submit' value='Сохранить'/>
            { this.renderErrorMessage() }
          </form>
        </div>
      </div>
    )
  }

  renderErrorMessage() {
    if (!this.props.errors.length) return;
    const message = this.props.errors.join('. ');

    setTimeout(() => this.props.hideMessage(), 2000);

    return(
      <div className='result-message'>
        <p>{ message }</p>
      </div>
    )
  }

  handleInputChange(event) {
    const target = event.target;
    this.setState({ [target.name]: target.value });
  }

  handleFileInputChange(event) {
    const target = event.target;
    this.setState({ [target.name]: target.files[0] });
  }

  handleEditorChange(description, editor) {
    this.setState({ description });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { name, description, person_capacity, plan_image } = this.state;

    const csrf = document.querySelector('[name=csrf-token]').content;
    this.props.sendItem('/admin/conference_rooms', csrf, {
      id: this.props.conferenceRoomId,
      name,
      description,
      person_capacity,
      plan_image
    });
  }
}

const mapStateToProps = (state) => {
  return {
    selectedEntity: state.entitiesReducer.selectedEntity,
    shouldRedirectToList: state.entitiesReducer.shouldRedirectToList,
    errors: state.entitiesReducer.errors
  };
};

const mapDispatchToProps = {
  fetchItem, sendItem, hideMessage
};

export default connect(
  mapStateToProps, mapDispatchToProps
)(ConferenceRoomEditorComponent);
