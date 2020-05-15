import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchDescriptionAboutHotel } from '../../actions/descriptions_actions';
import { fetchNewsList } from '../../actions/news_actions';

import withSlider from '../hoc/withSlider';
import withMap from '../hoc/withMap';

class HomePageComponent extends React.Component {
  componentDidMount() {
    document.title = 'Гостевой дом «Авия»';

    let anchorLink = this.props.location.hash;
    if (anchorLink && document.getElementById(anchorLink.substr(1))) {
      document.getElementById(anchorLink.substr(1)).scrollIntoView({behavior: "smooth"})
    }

    this.props.fetchDescriptionAboutHotel();
    this.props.fetchNewsList();
  }

  render() {
    return(
      <article>
        { this.props.sliderComponent }
        <div className='page-description'>
          <h2>Приветствуем Вас в нашем отеле!</h2>
          { this.renderDescriptionText() }
        </div>
        { this.renderDetails() }
        <div className='find-us-info'>
          <h2 id='how_to_find'>Как нас найти</h2>
          { this.props.mapComponent }
        </div>
      </article>
    )
  }

  renderDescriptionText() {
    return(
      <div className='description'>
        { (this.props.aboutHotel && <p>{ this.props.aboutHotel }</p>) }
      </div>
    )
  }

  renderDetails() {
    return(
      <div className='details'>
        <h2>Последние новости</h2>
        {
          this.props.newsList.map((peaceOfNews) => {
            return(
              <div className='detail' key={ peaceOfNews.id }>
                <img alt='detail-preview' src={ peaceOfNews.image_link }/>
                <p>{ peaceOfNews.content }</p>
                <Link to={ `news/${peaceOfNews.id}` }>
                  <i className="fas fa-arrow-right"/> Подробнее
                </Link>
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    aboutHotel: state.descriptionsReducer.aboutHotel,
    newsList: state.newsReducer.newsList
  };
};

const mapDispatchToProps = {
  fetchDescriptionAboutHotel,
  fetchNewsList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withSlider(withMap(HomePageComponent), true));
