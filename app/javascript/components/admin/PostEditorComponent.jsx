import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import TinyMceEditorComponent from './TinyMceEditorComponent';

import { fetchItem, sendItem } from '../../actions/admin/entities_actions';

class PostEditorComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { postName: '', content: '', isInitialState: true };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleEditorChange = this.handleEditorChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    document.title = 'Новость';

    const { postId } = this.props;
    if (postId) this.props.fetchItem('/admin/posts', postId);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.postId && prevState.isInitialState) {
      this.setState({
        postName: this.props.selectedEntity.name,
        content: this.props.selectedEntity.content,
        isInitialState: false
      })
    }
  }

  render() {
    if (this.props.shouldRedirectToList) return(<Redirect to='/admin/news'/>);

    return(
      <div className='edit-page'>
        <div className='page-description'>
          <h2>Добавление новости</h2>
        </div>
        <div className='edit-form'>
          <form onSubmit={ this.handleSubmit }>
            <label htmlFor='postName'>Название</label>
            <input name='postName' id='postName' value={ this.state.postName }
                   required minLength={5} maxLength={100}
                   onChange={ this.handleInputChange }/>
            <label htmlFor='editor'>Текст новости</label>
            <TinyMceEditorComponent
              format='html'
              value={ this.state.content }
              onEditorChange={ this.handleEditorChange }/>
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
    this.props.sendItem('/admin/posts', csrf, { id: this.props.postId, name: postName, content });
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

export default connect(mapStateToProps, mapDispatchToProps)(PostEditorComponent);
