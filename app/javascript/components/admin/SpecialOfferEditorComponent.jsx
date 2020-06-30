import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { Editor } from '@tinymce/tinymce-react';

import { fetchItem, sendItem } from '../../actions/admin/entities_actions';

class SpecialOfferEditorComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { postName: '', content: '', isInitialState: true };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.title = 'Спецпредложение';

    const { specialOfferId } = this.props;
    if (specialOfferId) this.props.fetchItem('/admin/special_offers', specialOfferId);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.specialOfferId && prevState.isInitialState) {
      this.setState({
        postName: this.props.selectedEntity.name,
        content: this.props.selectedEntity.content,
        isInitialState: false
      })
    }
  }

  render() {
    if (this.props.shouldRedirectToList) return(<Redirect to='/admin/special-offers-list'/>);

    return(
      <div className='edit-page'>
        <div className='page-description'>
          <h2>Добавление новости</h2>
        </div>
        <div className='edit-form'>
          <form onSubmit={ this.handleSubmit }>
            <label htmlFor='postName'>Название</label>
            <input name='postName' id='postName' value={ this.state.postName }
                   required onChange={ this.handleInputChange }/>
            <label htmlFor='content'>Текст новости</label>
            <Editor
              id='content'
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
              value={ this.state.content }
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

  handleEditorChange(content, editor) {
    this.setState({ content });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { postName, content } = this.state;

    const csrf = document.querySelector('[name=csrf-token]').content;
    this.props.sendItem('/admin/special_offers', csrf, { id: this.props.specialOfferId, name: postName, content });
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

export default connect(mapStateToProps, mapDispatchToProps)(SpecialOfferEditorComponent);