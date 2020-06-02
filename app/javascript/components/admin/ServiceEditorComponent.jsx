import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchItem, sendItem } from '../../actions/admin/entities_actions';

class ServiceEditorComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: '', image_link: '', isInitialState: true };

    this.handleInputChange = this.handleInputChange.bind(this);
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
        image_link: this.props.selectedEntity.image_link,
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
          <form onSubmit={ this.handleSubmit }>
            <label htmlFor='name'>Название</label>
            <input name='name' id='name' value={ this.state.name }
                   required onChange={ this.handleInputChange }/>
            <label htmlFor='image_link'>Изображение</label>
            <input name='image_link' id='image_link' value={ this.state.image_link }
                   required onChange={ this.handleInputChange }/>
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

    const { name, image_link } = this.state;

    const csrf = document.querySelector('[name=csrf-token]').content;
    this.props.sendItem('/admin/services', csrf, {
      id: this.props.serviceId, name, image_link
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
