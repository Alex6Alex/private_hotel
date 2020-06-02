import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { Editor } from '@tinymce/tinymce-react';

import { fetchItem, sendItem } from '../../actions/admin/entities_actions';

class DescriptionEditorComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { name: '', description: '', isInitialState: true };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.title = 'Текст';

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
          <h2>Добавление новости</h2>
        </div>
        <div className='edit-form'>
          <form onSubmit={ this.handleSubmit }>
            <label htmlFor='name'>Название</label>
            <input name='name' id='name' value={ this.state.name }
                   required onChange={ this.handleInputChange }/>
            <label htmlFor='description'>Текст описания страницы</label>
            <Editor
              id='description'
              init={{
                menubar: false,
                plugins: [
                  'advlist autolink lists link image',
                  'charmap preview anchor searchreplace visualblocks',
                  'insertdatetime media paste help wordcount'
                ],
                toolbar:
                  'undo redo | formatselect | bold italic | \
                  alignleft aligncenter alignright alignjustify | \
                  bullist numlist outdent indent | removeformat | help'
              }}
              value={ this.state.description }
              onEditorChange={ this.handleEditorChange } />
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

    const { name, description } = this.state;

    const csrf = document.querySelector('[name=csrf-token]').content;
    this.props.sendItem('/admin/description_texts', csrf, { id: this.props.descriptionId, name, description });
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

export default connect(mapStateToProps, mapDispatchToProps)(DescriptionEditorComponent);
