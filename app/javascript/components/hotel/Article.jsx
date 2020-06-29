import React from 'react';
import { connect } from 'react-redux';

import { fetchArticle } from '../../actions/articles_actions';

class Article extends React.Component {
  componentDidMount() {
    document.title = `${this.props.title} | Гостевой дом «Авия»`;

    this.props.fetchArticle(this.props.url, this.props.elementId);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (!prevProps.article.name && this.props.article.name) {
      document.title = `${this.props.article.name} | Гостевой дом «Авия»`;
    }
  }

  render() {
    return (
      <div className='info-article'>
        <div className='page-description'>
          <h2>{ this.props.article.name }</h2>
        </div>
        <div className='special-offer-info'
             dangerouslySetInnerHTML={{ __html: this.props.article.content }}>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { article: state.articleReducer.article, elementId: ownProps.elementId };
};

const mapDispatchToProps = { fetchArticle };

export default connect(mapStateToProps, mapDispatchToProps)(Article);
