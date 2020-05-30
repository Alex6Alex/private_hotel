import React from 'react';
import { connect } from 'react-redux';

import { fetchNews } from '../../actions/news_actions';

class Article extends React.Component {
  componentDidMount() {
    document.title = 'Спецпредложение | Гостевой дом «Авия»';

    this.props.fetchNews(this.props.elementId);
  }

  render() {
    return (
      <div className='info-article'>
        <div className='page-description'>
          <h2>{ this.props.selectedNews.name }</h2>
        </div>
        <div className='special-offer-info'
             dangerouslySetInnerHTML={{ __html: this.props.selectedNews.content }}>
        </div>
        <img src={ this.props.selectedNews.image_link } alt='Special Offer Image'/>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { selectedNews: state.newsReducer.selectedNews, elementId: ownProps.elementId };
};

const mapDispatchToProps = { fetchNews };

export default connect(mapStateToProps, mapDispatchToProps)(Article);
