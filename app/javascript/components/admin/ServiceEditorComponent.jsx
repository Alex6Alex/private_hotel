import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchItem, sendItem } from '../../actions/admin/entities_actions';

class ServiceEditorComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: '', image_file: null, isInitialState: true };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFileInputChange = this.handleFileInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.title = 'Редактирование сервиса';

    const { serviceId } = this.props;
    if (serviceId) this.props.fetchItem('/admin/services', serviceId);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.serviceId && prevState.isInitialState) {
      this.setState({
        name: this.props.selectedEntity.name,
        isInitialState: false
      })
    }
  }

  render() {
    if (this.props.shouldRedirectToList) return(<Redirect to='/admin/services-list'/>);

    return(
      <div className='edit-page'>
        <div className='page-description'>
          <h2>Добавление новости</h2>
        </div>
        <div className='edit-form'>
          <form onSubmit={ this.handleSubmit } encType='multipart/form-data'>
            <label htmlFor='name'>Название</label>
            <input name='name' id='name' value={ this.state.name }
                   required onChange={ this.handleInputChange }/>
            <label htmlFor='image_file'>Изображение</label>
            <input name='image_file' id='image_file' required type='file'
                   onChange={ this.handleFileInputChange }/>
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

  handleFileInputChange() {
    const target = event.target;
    this.setState({ [target.name]: target.files[0] });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { name, image_file } = this.state;

    const csrf = document.querySelector('[name=csrf-token]').content;
    this.props.sendItem('/admin/services', csrf, {
      id: this.props.serviceId, name, image_file
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

export default connect(mapStateToProps, mapDispatchToProps)(ServiceEditorComponent);
