import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import TinyMceEditorComponent from './TinyMceEditorComponent';

import { fetchItem, sendItem, hideMessage } from '../../actions/admin/entities_actions';

class DescriptionEditorComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: '', description: '', isInitialState: true };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.title = 'Редактирование описания';

    const { descriptionId } = this.props;
    if (descriptionId) this.props.fetchItem('/admin/description_texts', descriptionId);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.descriptionId && prevState.isInitialState) {
      this.setState({
        name: this.props.selectedEntity.name,
        description: this.props.selectedEntity.description,
        isInitialState: false
      })
    }
  }

  render() {
    if (this.props.shouldRedirectToList) return(<Redirect to='/admin/page-descriptions'/>);

    return(
      <div className='edit-page'>
        <div className='page-description'>
          <h2>Редактирование описания</h2>
        </div>
        <div className='edit-form'>
          <form onSubmit={ this.handleSubmit }>
            <label htmlFor='name'>Название</label>
            <select name='name' id='name' value={ this.state.name }
                    required onChange={ this.handleInputChange }>
              <option key='about_hotel_description'>
                Описание об отеле
              </option>
            </select>
            <label htmlFor='editor'>Текст описания страницы</label>
            <TinyMceEditorComponent
              format='text'
              value={ this.state.description }
              onEditorChange={ this.handleEditorChange }/>
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

  handleEditorChange(description, editor) {
    this.setState({ description });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { name, description } = this.state;

    const csrf = document.querySelector('[name=csrf-token]').content;
    this.props.sendItem('/admin/description_texts', csrf, { id: this.props.descriptionId, name, description });
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

export default connect(mapStateToProps, mapDispatchToProps)(DescriptionEditorComponent);
